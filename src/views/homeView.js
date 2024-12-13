import {html} from 'lite-html'

const template = () => html`
<div class="lg:hidden" role="dialog" aria-modal="true">
  <div class="fixed inset-0 z-50 bg-gray-900 bg-opacity-50"></div>
  <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div class="flex items-center justify-between">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Mystery Box Shop</span>
      </a>
      <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-gray-900">
        <span class="sr-only">Close menu</span>
      </button>
    </div>
    <div class="mt-6 flow-root">
      <div class="-my-6 divide-y divide-gray-500/10">
        <div class="space-y-2 py-6">
          <a href="/products" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">Product</a>
          <a href="/features" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100">Features</a>
        </div>
        <div class="py-6">
          <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-black hover:bg-gray-100">Log in</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <!-- Exciting Gradient Background with overlay for better contrast -->
  <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80" aria-hidden="true">
    <div class="relative left-1/2 w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 opacity-80 sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>

  <!-- Content -->
  <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 flex flex-col justify-between items-center text-center">
    <div class="relative z-10">
      <h1 class="text-6xl font-extrabold tracking-tighter text-black sm:text-6xl">
        Unlock the Mystery
      </h1>
      <p class="mt-12 text-lg sm:text-2xl text-black font-medium">
        Our mystery boxes are packed with thrilling surprises and exclusive treasures! Are you ready to step into the unknown?
      </p>
    </div>

    <div class="mt-10">
      <a href="/boxes" class="rounded-full bg-pink-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        Explore Boxes
      </a>
    </div>
  </div>

  <!-- Subtle Footer Decoration with overlay -->
  <div class="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-lg sm:top-[calc(100%-20rem)]" aria-hidden="true">
    <div class="relative left-1/2 w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 opacity-80 sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
</div>
` 

export function homeView(ctx) {

console.log(ctx.isAdmin);

  
const homeTemplate = template()
ctx.render(homeTemplate)

}