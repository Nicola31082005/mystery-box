import { html } from 'lite-html'
import page from 'page'
import { login } from '../../services/userServices.js'


const template = (onSubmit) => html`
 
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-20 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" @submit=${onSubmit}>
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600">
        Not having an account? 
        <a href="/register" class="font-semibold text-indigo-600 hover:text-indigo-500">Register</a>
      </p>
    </div>

  </div>
</div>

` 

export function loginView(ctx) {
  const loginTemplate = template(loginHandler.bind(ctx));
  ctx.render(loginTemplate);
}

async function loginHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const userCredential = await login(email, password);
    console.log(userCredential);
      
    page.redirect('/');

  } catch (err) {
    console.log(err.message);
  }
}