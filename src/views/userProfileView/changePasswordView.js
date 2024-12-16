import { html } from 'lite-html';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider, auth } from '../../../firebase'  
import page from 'page';


const template = (handleSubmit) => html`
  <div class=" min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-lg font-semibold text-gray-900 text-center mb-4">Change Password</h2>

      <!-- Change Password Form -->
      <form @submit=${handleSubmit} class="space-y-4">
        
         <!-- Current Password -->
         <div>
          <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            class="mt-1 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
            placeholder="Enter current password"
            required
          />
        </div>

        <!-- New Password -->
        <div>
          <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            class="mt-1 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
            placeholder="Enter new password"
            required
          />
        </div>

        <!-- Confirm New Password -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            class="mt-1 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
            placeholder="Confirm new password"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          Change Password
        </button>
      </form>
    </div>
  </div>
`;

export function changePasswordView(ctx){

    const changePasswordTemplate = template(handleSubmit.bind(ctx));
    ctx.render(changePasswordTemplate)


} 

async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget);

    const currentPassword = formData.get('currentPassword')
    const newPassword = formData.get('newPassword')
    const confirmPassword = formData.get('confirmPassword')

    try{

    if (!newPassword || !confirmPassword || !currentPassword) {
        alert('Fill all the fields!')
        return
    }
    
    if (newPassword !== confirmPassword) {
        alert('Passwords don\'t match!')
        return
    }

    const user = this.getUser()
    const credential = EmailAuthProvider.credential(user.email, currentPassword)

    await reauthenticateWithCredential(user, credential)
    

    await updatePassword(user, newPassword)
    alert('Password is changed successfully!')
    e.target.reset()

    page.redirect('/')
    
    } catch (err) { 
        alert(err.message)
        console.log(err.message)
    }


}