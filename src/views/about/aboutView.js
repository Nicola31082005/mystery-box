import { html } from "lite-html";


const template = () => html`
<section class="min-h-screen bg-gray-100 py-12 mt-28">
  <div class="container mx-auto px-6 lg:px-16">
    <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>
    <p class="text-lg text-gray-600 text-center mb-12">
      Discover the thrill of unboxing surprises with our expertly curated mystery boxes, designed to delight and amaze.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">500+</h2>
        <p class="text-gray-600">Unique Items</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">100%</h2>
        <p class="text-gray-600">Satisfaction Guarantee</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">20+</h2>
        <p class="text-gray-600">Themed Boxes</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">Bulgaria</h2>
        <p class="text-gray-600">Shipping Available</p>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
      <p class="text-gray-600 text-lg mb-6">
        We specialize in creating memorable experiences with every mystery box. Dive into the excitement and uncover treasures that spark joy.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/boxes" class="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Explore Our Boxes
        </a>
        <a href="/about/learn-more" class="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>


`

export async function aboutView(ctx) {
    const aboutPageTemplate = template();
    ctx.render(aboutPageTemplate)
}