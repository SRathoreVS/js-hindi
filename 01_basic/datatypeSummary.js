// Primitive data type (call by value a copy of type is allocated to manipulate )

// 7 types : String ,Number , Boolean ,null ,Undefined ,Symbol ,BigInt

//__________________________________________

const score = 100 ;
const scoreValue = 100.3 ;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

// using Symbol() is for unique ID even if value is same 
const id = Symbol(`112233`);
const anotherId = Symbol(`112233`);

console.log(id === anotherId); // false 

const bigNum = 546546656564748n; // BigInt

//__________________________________________

// Reference Type (non - primtive type )

// Array ,Objects ,Functions

const heros = ["shaktiman", "naagraj","doga"]; // Array (type function)

let person = {
    name : "satyam",
    age : 24 ,
    mail : "satyamchelsea123@gmail.com"
} // Object  (type function)

let myFunc = function(){
    console.log("hello World");
} //Function  (type object function)

myFunc();
//____________________________________

console.log(typeof bigNum); // BigInt
console.log(typeof scoreValue); // number
console.log(typeof outsideTemp); // Object (as declared as null)


