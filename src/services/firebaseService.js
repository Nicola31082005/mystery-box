import { getCurrentDeals } from "../../functions";

const baseUrl = 'https://mystery-box-project-default-rtdb.europe-west1.firebasedatabase.app'
const functionsBaseUrl = 'https://us-central1-mystery-box-project.cloudfunctions.net'

async function request(endpoint, method = "GET", data = null) {
    
const headers = {
"Content-Type": "application/json",
};

const options = { 
    method,
    headers
 }

if (data) {
    options.body =  JSON.stringify(data)
}

 const response = await fetch(`${baseUrl}${endpoint}.json`, options)

 if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Firebase request failed");
  }

  if (response.status === 204) {
    return
  }

  return response.json();
}


export const boxesApi = {

    getAll: () => request('/boxes', "GET"),
    getOne: (id) => request(`/boxes/${id}`, "GET"),
    updateBox: (id) => request(`/boxes/${id}`, "POST", data),

}

export const dealsApi = {

  getCurrentDeals: async () => {
    request(`${functionsBaseUrl}/getCurrentDeals`)
  },
  addNewDeal: async (dealData) => {
    request(`${functionsBaseUrl}/addNewDeal`, 'POST', dealData)
  }


}