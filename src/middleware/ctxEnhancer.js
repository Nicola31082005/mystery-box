import { auth, firestore, doc, getDoc } from "../../firebase";

export default async function (ctx, next) {
  const waitForAuthState = () =>
    new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        unsubscribe(); 
        resolve(user); 
      });
    });

  const user = await waitForAuthState();

  ctx.isAuthenticated = !!user;
  ctx.getUser = () => user;

  if (user) {
    try {

      const userDocRef = doc(firestore, "users", user.uid);
      const userDoc = await getDoc(userDocRef); 

      if (userDoc.exists() && userDoc.data().isAdmin) {
        ctx.isAdmin = true;
      } else {
        ctx.isAdmin = false;
      }
    } catch (error) {
      console.error("getDoc Error:", error.message);
      ctx.isAdmin = false;
    }
  } else {
    ctx.isAdmin = false;
  }

  next();
}