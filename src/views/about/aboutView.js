import { html } from "lite-html";


const template = () => html`
<section class="bg-gray-100 py-12">
  <div class="container mx-auto px-6 lg:px-16">
    <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-10">About Us</h1>
    <p class="text-lg text-gray-600 text-center mb-12">
      We are committed to delivering exceptional experiences and building connections that matter.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">12</h2>
        <p class="text-gray-600">Offices Worldwide</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">300+</h2>
        <p class="text-gray-600">Full-time Colleagues</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">40</h2>
        <p class="text-gray-600">Hours per Week</p>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 class="text-3xl font-bold text-indigo-600 mb-4">Unlimited</h2>
        <p class="text-gray-600">Paid Time Off</p>
      </div>
    </div>

    <div class="mt-16 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Our Commitment</h2>
      <p class="text-gray-600 text-lg mb-6">
        We take pride in fostering a culture of innovation, excellence, and meaningful relationships. Explore our story and values that define who we are.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#" class="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Our Values
        </a>
        <a href="/about/leadership" class="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-500 transition">
          Meet Our Leadership
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