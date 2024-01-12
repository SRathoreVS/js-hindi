//let score = "33" ;
//let score = null ;
//let score = undefined ;
//let score = true ;
let score = false ;

console.log(typeof score); // if 33 - number 
console.log(typeof score); // if "33" - string
console.log(typeof score); // if null =  value = 0
console.log(typeof score); // if undefined =  value = undefined
console.log(typeof score); // if true =  value = 1
console.log(typeof score); // if false =  value = 2
console.log(score); // if false =  value = 0

/*
let isLoggedIn = 1 ; // true 
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
*/

let isLoggedIn = "satyam" ;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);

// " " => false
// "satyam" => true

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // 33 - Number

let abc = "33abc";
let dff = Number(abc);
console.log(dff);  // NaN (Not a Number) # special type 
console.log(typeof dff); // number

let someNum = 33 ;
let stringNum = String(someNum);
console.log(stringNum); // 33
console.log(typeof stringNum); // string => "33"

//**************************  OPERATIONS  *****************************

let value = 3;
let negValue = -value ;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);

let str1 = "helloww";
let str2 = "priyatam";
let str3 = str1 + str2 ;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
console.log("1" + 2 + 3); //123
console.log(1 + 2 + "3"); //33

console.log(+true); // 1
let num1 , num2, num3 ;
// num1 = num2 = num3 = 2+2 ; // not readable not good to write like this 

let gameCount = 100 ;
++gameCount ; //101 
//gameCount++ ; // 101 
console.log(gameCount);


