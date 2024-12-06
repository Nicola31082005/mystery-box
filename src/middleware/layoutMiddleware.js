import { html, render } from "lite-html"

const mainEl = document.querySelector('#root')

const layoutTemplate = (body) => html`
<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="">
          <span>Mystery Box</span>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/boxes" class="text-sm/6 font-semibold text-gray-900">Boxes</a>
        <a href="/features" class="text-sm/6 font-semibold text-gray-900">Features</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/register" class="text-sm/6 font-semibold text-gray-900">Register <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>

  ${body}

</div>
`;


export function layoutView(ctx, next) {
    
    ctx.render = (template) => render(layoutTemplate(template), mainEl)  

    next()
}