import { html } from "lite-html";
import { doc, getDoc, setDoc, firestore, storage } from "../../../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const updateProfilePictureTemplate = (userData, handlePictureUpload, handleSubmit) => html`
  <div class="mt-24 min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-lg font-semibold text-gray-900 text-center mb-4">Update Profile Picture</h2>

      <!-- Current Profile Picture -->
      <div class="flex items-center justify-center mb-4">
        <div class="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          ${userData.previewPicture
            ? html`<img src=${userData.previewPicture} alt="Preview Profile Picture" class="rounded-full" />`
            : userData.profilePicture
            ? html`<img src=${userData.profilePicture} alt="Current Profile Picture" class="rounded-full" />`
            : html`
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-12 h-12 text-gray-400"
              >
                <path
                  d="M12 12c2.761 0 5-2.238 5-5s-2.239-5-5-5-5 2.238-5 5 2.239 5 5 5zm0 2c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z"
                />
              </svg>
            `}
        </div>
      </div>

      <!-- Upload Form -->
      <form @submit=${handleSubmit} class="space-y-4">
        <div>
          <label for="file" class="block text-sm font-medium text-gray-700">Choose New Profile Picture</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            @change=${handlePictureUpload}
            class="mt-1 block w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        >
          Update Picture
        </button>
      </form>
    </div>
  </div>
`;

export async function updateProfilePictureView(ctx) {
  const user = ctx.getUser();

  const userDocRef = doc(firestore, '/users', user.uid);
  const userDoc = await getDoc(userDocRef);
  const userData = userDoc.exists() ? userDoc.data() : {};

  let selectedFile = null;

  const handlePictureUpload = (e) => {
    selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        userData.previewPicture = event.target.result;
        const viewTemplate = updateProfilePictureTemplate(userData, handlePictureUpload, handleSubmit);
        ctx.render(viewTemplate);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    try{

        const storageRef = ref(storage, `profilePictures/${user.uid}/${selectedFile.name}`)

        // upload the file
        const uploadResult = await uploadBytes(storageRef, selectedFile)

        // get the file's download URL
        const downloadURL = await getDownloadURL(uploadResult.ref)
        console.log('File uploaded successfully. URL:', downloadURL);


        // Update firestore
        await setDoc(
            userDocRef,
            { profilePicture: downloadURL },
            { merge: true }
        )
        
        userData.profilePicture = downloadURL
        const viewTemplate = updateProfilePictureTemplate(userData, handlePictureUpload, handleSubmit);
        ctx.render(viewTemplate) 
    
    } catch(err){
        console.error('Error updating profile picture:', err);
        alert('Failed to update profile picture. Please try again.');
    }

    
    console.log('Uploading file:', selectedFile);

    // After successful upload, refresh the view or update the user's profile picture
    alert('Profile picture updated successfully!');
  };

  const viewTemplate = updateProfilePictureTemplate(userData, handlePictureUpload, handleSubmit);
  ctx.render(viewTemplate);
}
