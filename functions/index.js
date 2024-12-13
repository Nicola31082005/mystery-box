const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true }); // Import and configure CORS


admin.initializeApp();
const db = admin.database();



exports.getCurrentDeals = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const dealsSnapshot = await db.ref('/deals').once('value');
      const deals = dealsSnapshot.val();

      if (!deals) {
        return res.status(200).json([]);
      }

      const now = Date.now();
      const validDeals = Object.entries(deals)
        .filter(([id, deal]) => now >= deal.startDate && now <= deal.endDate)
        .map(([_id, deal]) => ({ _id, ...deal }));

      const boxPromises = validDeals.map(async (deal) => {
        const boxSnapshot = await db.ref(`/boxes/${deal.boxId}`).once('value');
        return {
          ...deal,
          box: boxSnapshot.val(),
        };
      });

      const results = await Promise.all(boxPromises);
      res.status(200).json(results);
    } catch (err) {
      console.error('Error fetching current deals:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

exports.addNewDeal = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      
      const { boxId, startDate, endDate, discountPrice } = req.body;

      if (!boxId || !startDate || !endDate) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      if (new Date(startDate) > new Date(endDate)) {
        return res.status(400).json({ error: 'startDate must be before endDate' });
      }

      console.log("Checking if box exists for boxId:", boxId);
      
      const boxSnapshot = await db.ref(`/boxes/${boxId}`).once('value');

      console.log("Box snapshot exists:", boxSnapshot.exists());

      if (!boxSnapshot.exists()) {
        return res.status(400).json({ error: 'Box not found' });
      }

      const newDeal = {
        boxId,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        discountPrice,
      };
      const newDealRef = await db.ref('/deals').push(newDeal);

      res.status(201).json({ id: newDealRef.key, ...newDeal });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});
