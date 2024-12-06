import { html, render } from "lite-html"

const mainEl = document.querySelector('#main')

const layoutTemplate = (body) => html`
<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
        </a>
      </div>

      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Boxes</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Features</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>

    ${body}
`

export function layoutView(ctx, next) {
    
    ctx.render = (template) =>  render(layoutTemplate(template), mainEl)  


    next()
}