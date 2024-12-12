import { html, render } from "lite-html"
import { logout } from "../services/userServices";
import page from "page";
import logo from "../assets/logo.png" 

const mainEl = document.querySelector('#root')

const layoutTemplate = (bodyTemplate, isAuthenticated) => html`
<div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="relative flex items-center justify-between p-6 lg:px-8 bg-white shadow-sm" aria-label="Global">
      <div class="relative flex lg:flex-1">
        <a href="/" class="flex items-center relative h-16"> <!-- Added height to parent -->
          <img src=${logo} alt="Logo" class="logoimage" />
          <!-- Absolute positioning for the logo -->
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-8 items-center">
        <a href="/boxes" class="relative text-lg font-semibold text-gray-700 hover:text-pink-500 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300">
          Boxes
        </a>
        <a href="/features" class="relative text-lg font-semibold text-gray-700 hover:text-pink-500 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300">
          Features
        </a>
        <a href="/about" class="relative text-lg font-semibold text-gray-700 hover:text-pink-500 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300">
          About us
        </a>
      </div>

      <!-- Authentication Links -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
        ${isAuthenticated ? html`
          <!-- Profile Icon -->
          <a href="/profile" class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-pink-100 transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 text-gray-700 group-hover:text-pink-500">
              <path d="M12 12c2.761 0 5-2.238 5-5s-2.239-5-5-5-5 2.238-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
            </svg>
          </a>

          <!-- Logout -->
          <a href="javascript:void(0)" @click=${logoutHandler} class="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-pink-500 transition-all duration-300 group">
            Logout
            <span aria-hidden="true" class="transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        ` : html`
          <!-- Login -->
          <a href="/login" class="flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-pink-500 transition-all duration-300 group">
            Login
            <span aria-hidden="true" class="transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        `}
      </div>
    </nav>
  </header>

  ${bodyTemplate}
</div>
`;


export function layoutView(ctx, next) {
  // Set the render method to include the bodyTemplate and auth state
  ctx.render = (bodyTemplate) => {
    ctx.bodyTemplate = bodyTemplate;  // Store the bodyTemplate
    render(layoutTemplate(bodyTemplate, ctx.isAuthenticated), mainEl);  // Re-render with updated auth state
  };

  // Call the next middleware in the stack
  next();
}

async function logoutHandler() {
  
  const choice = window.confirm('Do you want to logout?')
  
  if (!choice) {
    return
  }

  const response =  await logout()
  page.redirect('/')

}