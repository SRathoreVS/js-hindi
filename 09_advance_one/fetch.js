//######## instead of ASYNC AWAIT TRY CATCH use .then() .catch() ########
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> {
    console.log(error);
})