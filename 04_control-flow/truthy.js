// using TRUE and FALSE is like strictly following what is true and what is false here , but sometimes we have some values which we know would be true , so we use truty and falsy values 

// we assume few pre decided values as true or false 

/*
FALSY
--------------
false , 0 , -0 , BigInt 0n , ""(empty str) , null , undefined , NaN

TRUTHY
---------------
"0" , 'false' , true , " "(with space) , [] , {} , function(){} 
*/
const userEmail = "p@satyam.ai"

if (userEmail) {
    console.log(`got user email`);
}
else {
    console.log(`dont have user mail`);
}

const ab = []
if (ab.length === 0) {
    console.log("Array is empty");
}

const empIbj = {}

if (Object.keys(empIbj).length === 0) {
    console.log("Object is empty");
}

//++++++++ NULLISH COALESCING OPERATOR (??) +++++++++++++
//null and undefined

let val1;
//val1 = 5 ?? 10 
//val1 = null ?? 10

//val1 = undefined ?? 15
val1 = null ?? 15 ?? 10 //15

console.log(val1);

// ++++++++++++++ TERNARY OPERATOR ++++++++++++++++++

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(`the iceTeaprice is ${iceTeaPrice}`) : console.log(`less than 80`);
//the iceTeaprice is 100

