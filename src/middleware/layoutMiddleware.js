import { html, render } from "lite-html"
import { logout } from "../services/userServices";
import page from "page";
import logo from "../assets/logo.png" 

const mainEl = document.querySelector('#root')

const layoutTemplate = (bodyTemplate, isAuthenticated) => html`
<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8 min-h-24" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="flex items-center">
          <img src=${logo} alt="Logo" class="h-auto max-h-24" /> <!-- Logo size adjustment -->
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-8 items-center">
  <a href="/boxes" class="relative text-lg font-semibold text-gray-900 hover:text-pink-600 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-600 hover:after:w-full after:transition-all after:duration-300">
    Boxes
  </a>
  <a href="/features" class="relative text-lg font-semibold text-gray-900 hover:text-pink-600 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-600 hover:after:w-full after:transition-all after:duration-300">
    Features
  </a>
</div>

      ${!isAuthenticated ?
        html`
        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="/login" class="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-pink-600 transition-all duration-300 group">
            Login
            <span aria-hidden="true" class="transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
        ` :
        html`
        <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="javascript:void:(0)" @click=${logoutHandler} class="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-pink-600 transition-all duration-300 group">
            Logout
            <span aria-hidden="true" class="transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
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