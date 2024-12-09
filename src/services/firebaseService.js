const baseUrl = 'https://mystery-box-project-default-rtdb.europe-west1.firebasedatabase.app'

async function request(endpoint, method = "GET", data = null) {
    
const options = { 
    method,
    headers: { "Content-Type" : "application/json" },
 }

if (body) {
    options.body =  JSON.stringify(data)
}

 const response = await fetch(`${baseUrl}${endpoint}.json`, options)

 if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Firebase request failed");
  }

  if (response.status = 204) {
    return
  }

  return response.json();
}


export const boxesApi = {

    getAll: () => request('/boxes', "GET"),
    getOne: (id) => request(`/boxes/${id}`, "GET"),
    updateBox: (id) => request(`/boxes/${id}`, "POST", data),

}