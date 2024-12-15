import { html } from "lite-html";

const template = () => html`
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
      <!-- Box 1 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://via.placeholder.com/500x300" alt="Mystery Box 1" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Adventure Mystery Box</h3>
          <p class="text-gray-600 mb-4">
            Unbox thrilling and exciting surprises tailored for the adventurous spirit. Perfect for outdoor enthusiasts!
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-semibold text-indigo-600">$39.99</span>
            <span class="line-through text-gray-500 text-lg">$59.99</span>
          </div>
          <a href="#" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-indigo-500 transition duration-200">Grab the Deal</a>
        </div>
      </div>

      <!-- Box 2 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://via.placeholder.com/500x300" alt="Mystery Box 2" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Gamer’s Paradise Box</h3>
          <p class="text-gray-600 mb-4">
            The ultimate box for gamers! Packed with exclusive collectibles and gaming gear to enhance your gaming experience.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-semibold text-indigo-600">$49.99</span>
            <span class="line-through text-gray-500 text-lg">$79.99</span>
          </div>
          <a href="#" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-indigo-500 transition duration-200">Grab the Deal</a>
        </div>
      </div>

      <!-- Box 3 -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
        <img src="https://via.placeholder.com/500x300" alt="Mystery Box 3" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4">Tech Geek Box</h3>
          <p class="text-gray-600 mb-4">
            For all the tech lovers! Explore the coolest gadgets, tools, and accessories that are sure to impress.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-semibold text-indigo-600">$59.99</span>
            <span class="line-through text-gray-500 text-lg">$99.99</span>
          </div>
          <a href="#" class="mt-4 inline-block bg-indigo-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-indigo-500 transition duration-200">Grab the Deal</a>
        </div>
      </div>
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
`

export async function suprisePage(ctx) {
    const surpriseTemplate = template()
    ctx.render(surpriseTemplate)

}