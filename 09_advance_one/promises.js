//**************************** promise1 ************************* 
//############# DOING BY ASSIGNING IT TO VARIABLE ###################
const promise1 = new Promise((resolve,reject) => {
    //Do and asyn task
    //DB calls ,cryptography ,network
    setTimeout(function(){
        console.log('Asyn task is complete');
        resolve() // calling .then 
    },1000)
})

promise1.then(() => {
    //automatically recieves an argument 
    console.log("promise consumed");
})  // directly connected to resolve 

//O/p - 
//Asyn task is complete 
//promise consumed

//**************************** promise2 ************************* 
//############# DOING DIRECTLY .then() ###################
new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log('asyn task two');
        resolve()
    },1000)
}).then(() => {
    console.log('Asyn two resolved');
})//asyn task two
//Asyn two resolved

//**************************** promise3 ************************* 
const promise3 = new Promise((resolve,reject) => {
    setTimeout(()=> {
     resolve({username: "Satyam", email: "satyamchelsea123@gmail.com"})
    },1000)
})
promise3.then((user)=>{
     console.log(user); // { username: 'Satyam', email: 'satyamchelsea123@gmail.com' }
})

//**************************** promise4 ************************* 
const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
       let error = false;
       if (!error) {
        resolve({username: "Satyam",password: "Saty123"})
       } 
       else {
        reject('ERROR: Something went wrong')
       }
    }, 1000);
})
promise4.then((user) =>{
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username);
}).catch((error) => {
    console.log(error); // ERROR: Something went wrong , when error = true
})//{ username: 'Satyam', password: 'Saty123' }
//Satyam when error = false 
.finally(()=> {
    console.log("Finally , the promise is either resolve or rejected ");
})//Finally , the promise is either resolve or rejected 

//**************************** promise5 *************************
//########### instead of .then() ASYNC AWAIT TRY CATCH ##################
const promise5 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        let error = true;
        if (!error) {
         resolve({username: "Javascript",password: "Saty123"})
        } 
        else {
         reject('ERROR: Something went wrong')
        }
     }, 1000);
});
async function consumePromise5(){
   try {
    const response = await promise5
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
}

consumePromise5() //ERROR: Something went wrong

async function getAllUsers(){
try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
}
catch(error){
    console.log("E: Error");
}
}
getAllUsers()

//######## instead of ASYNC AWAIT TRY CATCH use .then() .catch() ########
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=> {
    console.log(error);
})