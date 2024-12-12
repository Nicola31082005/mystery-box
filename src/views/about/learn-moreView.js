import { html } from "lite-html";

const template = () => html`
<section class="min-h-screen bg-gray-100 py-12 mt-28">
  <div class="container mx-auto px-6 lg:px-16">
    <h1 class="text-4xl font-extrabold text-gray-800 text-center mb-8">Welcome to Mystery Boxes</h1>
    <p class="text-lg text-gray-600 text-center mb-8">
      At Mystery Boxes, we bring the thrill of surprise right to your doorstep. 
      Our mission is to offer unique, exciting, and high-quality mystery boxes 
      filled with items you’ll love.
    </p>

    <div class="mb-8">
      <h3 class="text-2xl font-bold text-gray-800 mb-3 text-center">What We Do</h3>
      <p class="text-gray-600 text-lg mb-4 text-center">
      We carefully curate each mystery box to include a variety of products, ensuring every box is a delightful experience. 
  Whether you're a collector, a gamer, or someone who loves surprises, we have something for you! Each mystery box is designed to bring excitement and joy, filled with a wide range of high-quality items that cater to your unique tastes and interests.
  <br />
  Our team works tirelessly to source exclusive collectibles, gadgets, fashion accessories, and much more to ensure that every box is an adventure in itself. With new themes and products constantly being introduced, you’ll never know exactly what you'll receive, but you can always count on one thing: it’s going to be something amazing. Whether it’s a special edition collectible, a cutting-edge tech gadget, or a unique fashion item, you’re sure to find something that will surprise and delight you!
  <br />
  From retro gaming gear to modern tech, stylish accessories to home decor, our mystery boxes provide the perfect way to treat yourself or give a gift that will truly stand out. Embrace the mystery, and let us bring the thrill of surprise right to your doorstep.
      </p>
    </div>

    <div class="mb-8">
  <h3 class="text-3xl font-extrabold text-gray-800 mb-6 text-center">What We Sell</h3>
  <ul class="list-disc list-inside text-gray-600 text-lg space-y-4 mx-auto max-w-4xl">
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>Exclusive collectibles</span>
    </li>
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>Electronics and gadgets</span>
    </li>
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>Fashion accessories</span>
    </li>
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>Home decor items</span>
    </li>
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>Surprise bundles for gamers and geeks</span>
    </li>
    <li class="flex items-center space-x-3">
      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m6-6H6"></path>
      </svg>
      <span>And so much more!</span>
    </li>
  </ul>
</div>
</section>
`

export function learnMore(ctx) {
    const learnMoreTemplate = template()
    ctx.render(learnMoreTemplate)
}