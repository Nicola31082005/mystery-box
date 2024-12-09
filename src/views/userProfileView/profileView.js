import { html } from "lite-html";

const template = () => html`
<div class="mt-12 min-h-screen bg-gray-50">


  <!-- Main Content -->
  <main class="container mx-auto px-6 py-12">
    <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-6">
        <!-- User Info -->
        <div class="flex items-center space-x-4 mb-6">
          <!-- Profile Picture -->
          <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-8 h-8 text-gray-400">
              <path d="M12 12c2.761 0 5-2.238 5-5s-2.239-5-5-5-5 2.238-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
            </svg>
          </div>
          <!-- User Details -->
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Welcome,</h2>
            <p class="text-sm text-gray-600">authenticatedEmail</p> <!-- Replace with actual user email -->
          </div>
        </div>

        <!-- Account Settings -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
          <ul class="space-y-3">
            <li>
              <button class="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                <span>Update Profile Picture</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </li>
            <li>
              <button class="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                <span>Change Password</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </li>
            <li>
              <button class="flex items-center justify-between w-full text-left text-sm font-medium text-gray-900 bg-gray-50 p-4 rounded-lg hover:bg-gray-100">
                <span>Manage Subscription</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <!-- Recent Activity -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <ul class="divide-y divide-gray-200">
            <li class="py-3 flex justify-between">
              <span class="text-sm text-gray-700">Logged in from Chrome on Windows</span>
              <span class="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li class="py-3 flex justify-between">
              <span class="text-sm text-gray-700">Updated profile picture</span>
              <span class="text-sm text-gray-500">Yesterday</span>
            </li>
            <li class="py-3 flex justify-between">
              <span class="text-sm text-gray-700">Changed password</span>
              <span class="text-sm text-gray-500">Last week</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</div>
`

export async function profileView(ctx) {
    
    const profileTemplate = template()
    ctx.render(profileTemplate)


}