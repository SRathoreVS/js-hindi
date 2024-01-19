// singleton (one of its own)by constructor its always singleton
Object.create

//object literals 

const mySym = Symbol("key1")

const JsUser = {
    name : "satyam",
    "full name" : "satyam rathore", // this can only be accessed by using [] methods not by . notation
    [mySym]: "myKey1", // Symbol can only be defined in the [] in object and can only be accessed by [] not by . notation
    age : 25,
    location: "vapi",
    email: "satyamchelsea123",
    isLoggedIn : false,
    lastLoginDays :["monday","Saturday"]
}

console.log(JsUser.email);   //satyamchelsea123
console.log(JsUser["email"]);//satyamchelsea123
console.log(JsUser["full name"]); //satyam rathore
console.log(typeof JsUser[mySym]); // string
console.log(JsUser[mySym]); // mykey1

JsUser.email = "satyamrathore123"; // to change or alter the value 
//Object.freeze(JsUser); // uses to freeze the changes of the object .
console.log(JsUser);
// {
//     name: 'satyam',
//     'full name': 'satyam rathore',
//     age: 25,
//     location: 'vapi',
//     email: 'satyamrathore123',
//     isLoggedIn: false,
//     lastLoginDays: [ 'monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }

JsUser.greeting = function(){
    console.log(`hello JsUser`);
}
JsUser.greetingTwo = function(){
    console.log(`hello JsUser ,${this.name}`); // we use this to refernce the object keys in literals 
}

console.log(JsUser.greeting());//hello JsUser
console.log(JsUser.greetingTwo());// hello JsUser ,satyam



