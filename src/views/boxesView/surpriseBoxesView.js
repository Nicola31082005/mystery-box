import { html } from "lite-html";
import { dealsApi } from "../../services/firebaseService";

const template = (deals) => html`
<section class="min-h-screen bg-gray-100 py-12 mt-28">
  <div class="container mx-auto px-6 lg:px-16">
    <!-- Heading Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Weekend Deals</h1>
      <p class="text-lg text-gray-600">
        Get ready for some amazing discounts on our mystery boxes this weekend! Don’t miss out on these exclusive deals before they’re gone!
      </p>
    </div>

    <!-- Deal Timer Section -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-indigo-600 mb-4">Limited Time Offer!</h2>
      <p class="text-lg text-gray-600 mb-6">
        These discounts are available for this weekend only. Hurry, grab your mystery box at a discounted price before the time runs out!
      </p>
      <!-- Countdown Timer (just placeholder for now) -->
      <div class="flex justify-center gap-4 items-center text-xl font-semibold text-gray-800">
        <div class="bg-indigo-600 text-white px-4 py-2 rounded-md">00</div>:<div class="bg-indigo-600 text-white px-4 py-2 rounded-md">10</div>:<div class="bg-indigo-600 text-white px-4 py-2 rounded-md">20</div>:<div class="bg-indigo-600 text-white px-4 py-2 rounded-md">35</div>
        <span class="text-lg text-gray-500">Time Left</span>
      </div>
    </div>

    <!-- Featured Boxes Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      ${deals.map(
        (deal) => html`
          <div class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            <img src=${deal.box.imageUrl} alt="Mystery Box 1" class="w-full h-48 object-cover"/>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">${deal.box.title}</h3>
              <p class="text-gray-600 mb-4">
                ${deal.box.description}
              </p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-semibold text-indigo-600">$${(deal.box.price - Number(deal.discountPrice)).toFixed(2)}</span>
                <span class="line-through text-gray-500 text-lg">$${deal.box.price}</span>
              </div>
              <a href="#" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-indigo-500 transition duration-200">Grab the Deal</a>
            </div>
          </div>
        `
      )}
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Hurry, Deals End Soon!</h2>
      <p class="text-lg text-gray-600 mb-6">
        Don’t miss out on the weekend sale! These deals won’t last forever—snag your mystery box before the weekend ends!
      </p>
      <a href="#" class="inline-block bg-indigo-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-indigo-500 transition duration-200">Shop All Weekend Deals</a>
    </div>
  </div>
</section>
`;

export async function suprisePage(ctx) {
  const deals = await dealsApi.getCurrentDeals();
  const surpriseTemplate = template(deals);
  

  ctx.render(surpriseTemplate);
}