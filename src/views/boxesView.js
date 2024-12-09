import {html} from 'lite-html'

const template = () => html`
<section class="bg-gray-100 py-12">
  <div class="container mx-auto px-6 lg:px-16">
    <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">Mystery Boxes</h1>
    <p class="text-lg text-gray-600 text-center mb-12">
      Discover the thrill of surprise! Explore our collection of mystery boxes and unlock a world of excitement.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <!-- Card Template -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Mystery Box"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Mystery Box 1</h2>
          <p class="text-gray-600 text-sm mb-4">
            Get ready for an unforgettable surprise! This box is packed with exciting goodies.
          </p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-indigo-600">$29.99</span>
            <a
              href="#"
              class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 transition"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <!-- Repeat Card Template for Each Box -->
      <!-- Example of another card -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Mystery Box"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 mb-2">Mystery Box 2</h2>
          <p class="text-gray-600 text-sm mb-4">
            This mystery box holds a special surprise just for you. Take the leap and find out!
          </p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-indigo-600">$19.99</span>
            <a
              href="#"
              class="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 transition"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

` 

export function boxesView(ctx) {
    
const boxesTemplate = template()
ctx.render(boxesTemplate)
 
}