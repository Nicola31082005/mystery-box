import { getAuth } from "firebase/auth";

const baseUrl = 'https://mystery-box-project-default-rtdb.europe-west1.firebasedatabase.app';

async function request(url, method = "GET", data = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  // Conditionally add the Authorization header if the user is authenticated
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    try {
      const idToken = await user.getIdToken();
      headers.Authorization = `Bearer ${idToken}`;
    } catch (error) {
      console.error("Error fetching ID token:", error);
      throw new Error("Authentication failed. Please log in again.");
    }
  }

  const options = { 
    method,
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  // Conditionally append `.json` for Firebase Realtime Database URLs
  const isDatabaseUrl = url.startsWith(baseUrl);
  const finalUrl = isDatabaseUrl ? `${url}.json` : url;

  const response = await fetch(finalUrl, options);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Firebase request failed");
  }

  if (response.status === 204) {
    return;
  }

  return response.json();
}

export const boxesApi = {
  getAll: () => request(`${baseUrl}/boxes`, "GET"),
  getOne: (id) => request(`${baseUrl}/boxes/${id}`, "GET"),
  updateBox: (id, data) => request(`${baseUrl}/boxes/${id}`, "POST", data), // Fixed missing data argument
};

export const dealsApi = {
  getCurrentDeals: async () => {
    return await request(`https://getcurrentdeals-h6puwdwppa-uc.a.run.app`, "GET");
  },
  addNewDeal: async (dealData) => {
    return await request(`https://addnewdeal-h6puwdwppa-uc.a.run.app`, "POST", dealData);
  },
};