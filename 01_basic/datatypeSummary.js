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

//________________________________________________
//Memory : Stack(primitive) and Heap(non-primitive)

//STACK(primitive) : we get a copy of orignal value and have change in copy type .

//HEAP(non-primitive) : we get the reference of the orignal value , and so any changes made is changed in orignal value.

//_______________________
//STACK egs....

let myYoutubeMain = "satyamchelseadotcom";
let anothername = myYoutubeMain ;
anothername = "anothername" ;

console.log(myYoutubeMain); //even after changing the value by allocating it in another variable and changing the variables value , the orignal variable will still contain the intial value(orignal value) from the start . therefore ,,,,, // satyamchelseadotcom 

console.log(anothername); // anothername .
//_______________________
//HEAP egs....

let user1 = {
    email : "satyamchelsea123@gmail.com",
    upi : "user@ybl"
}

let user2 = user1
user2.upi = "user2@ybl" ;

console.log(user1.upi); // user2@ybl
console.log(user2.upi); // user2@ybl