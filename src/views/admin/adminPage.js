import { html } from 'lite-html'
import { dealsApi } from '../../services/firebaseService.js'
import page from 'page';

const ADMIN_ID = '4fZIdNaLFyMMPYgqChakXOP03Z32';

// Admin Page Template
const template = (onSubmit) => html`
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-20 text-center text-2xl font-bold tracking-tight text-gray-900">Admin Panel - Create New Deal</h2>
    </div>

    <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit=${onSubmit}>
        
        <!-- Box ID Field -->
        <div>
          <label for="boxId" class="block text-sm font-medium text-gray-900">Box ID</label>
          <div class="mt-2">
            <input type="text" name="boxId" id="boxId" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
          </div>
        </div>

        <!-- Start Date Field -->
        <div>
          <label for="startDate" class="block text-sm font-medium text-gray-900">Start Date</label>
          <div class="mt-2">
            <input type="date" name="startDate" id="startDate" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
          </div>
        </div>

        <!-- End Date Field -->
        <div>
          <label for="endDate" class="block text-sm font-medium text-gray-900">End Date</label>
          <div class="mt-2">
            <input type="date" name="endDate" id="endDate" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
          </div>
        </div>
        
        <!-- Discount price -->
        <div>
          <label for="discount" class="block text-sm font-medium text-gray-900">Discount price</label>
          <div class="mt-2">
            <input type="number" name="discount" id="discount" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm" />
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600">
            Create Deal
          </button>
        </div>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Want to log out? 
          <a href="/logout" class="font-semibold text-indigo-600 hover:text-indigo-500">Log Out</a>
        </p>
      </div>
    </div>
  </div>
`



export function adminView(ctx) {
    
    const user = ctx.getUser()
    
    if (!user || user.uid !== ADMIN_ID) {
        alert('Access Denied. You are not an admin.');
        page.redirect('/');
        return;
      }
   

    const adminTemplate = template(adminHandler)
    ctx.render(adminTemplate)
}

async function adminHandler(e) {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  const boxId = formData.get('boxId')
  const startDate = formData.get('startDate')
  const endDate = formData.get('endDate')
  const discountPrice = formData.get('discount')

  try {
    await dealsApi.addNewDeal({ boxId, startDate, endDate, discountPrice })
    alert('Deal added successfully!')
    e.target.reset() // Reset form after submission
  } catch (err) {
    console.error('Error adding deal:', err.message)
    alert('There was an error adding the deal.')
  }
}