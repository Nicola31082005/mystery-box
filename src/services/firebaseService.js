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


}