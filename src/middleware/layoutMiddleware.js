import { html, render } from "lite-html"
import { logout } from "../services/userServices";
import page from "page";
import logo from "../assets/logo.png" 

const mainEl = document.querySelector('#root')

const layoutTemplate = (bodyTemplate, isAuthenticated) => html`
<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="flex items-center">
          <img src=${logo} alt="Logo" class="max-h-16" /> <!-- Logo size adjustment -->
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="/boxes" class="text-base font-semibold text-gray-900 hover:text-gray-700">Boxes</a> <!-- Consistent text size -->
        <a href="/features" class="text-base font-semibold text-gray-900 hover:text-gray-700">Features</a> <!-- Consistent text size -->
      </div>

      ${!isAuthenticated ?
        html`
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/login" class="text-base font-semibold text-gray-900 hover:text-gray-700">Login<span aria-hidden="true">&rarr;</span></a>
          </div>
        ` :
        html`
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="javascript:void(0)" class="text-base font-semibold text-gray-900 hover:text-gray-700" @click=${logoutHandler}>Logout<span aria-hidden="true">&rarr;</span></a>
          </div>
        `
      }
    </nav>
  </header>

  ${bodyTemplate}
</div>
`;


export function layoutView(ctx, next) {
    
  ctx.render = (bodyTemplate) => render(layoutTemplate(bodyTemplate, ctx.isAuthenticated()), mainEl)  

  next()
}

async function logoutHandler() {
  
  const response =  await logout()
  page.redirect('/')

}