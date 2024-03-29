// suppose we have written a lines of code and then capsulated them in one package {} , so that we can use it anywhere buy calling that package , and not write all the code again and again .


// 1 function varName(){}

function sayMyName() { 
// console.log("S");
// console.log("A");
// console.log("T");
// console.log("Y");
// console.log("A");
// console.log("M");
}

sayMyName();

// ++++++++++++++ RETURN KEYWORD ++++++++++++++++

// Once a return keyword is used and is executefd then no other lines of code will be executed after the execution of the 'return' keyword

// function addTwoNo(num1,num2){
//     console.log(num1+num2)
// }
function addTwoNo(num1,num2){
    // let result = num1 + num2
    // return result

    return num1 + num2 ; // result : 14
}

addTwoNo(); //Nan 
addTwoNo(3,6) // 9
addTwoNo(3,"4")// 34

const result = addTwoNo(5,9); // 14

console.log("Result :", result); // undefined (function does not return any value , it just console logs it ) // 14

function userLoginMsg(username = "NAME"){
    if(username === undefined){  // !username
       console.log("please enter the user name");
       return
    }
    return `${username} just logged in`
}

console.log(userLoginMsg("Satyam")); //Satyam just logged in
// console.log(userLoginMsg()); // undefined just logged in
// console.log(userLoginMsg("")); // just logged in 

// we can assign a default value in Parameter , as , function varname(user = "abcxyz"){} , here abcxyz will be the default value if no value is given .

// Multiple parameters ++++++++++++++++++++++++++
// +++++++++++++++  REST OPERATOR  ++++++++++++++

function calcCartPrice(...nums) {
    return nums
}
console.log(calcCartPrice(1,2,3,4,5,6,7,8));//[1, 2, 3, 4, 5, 6, 7, 8]

function calcCartPrice2(num1,num2,...nums) {
    return nums
}
console.log(calcCartPrice(1,2,3,4,5,6,7,8)); //[3, 4, 5, 6, 7, 8] nums 

// const user = {
//     username : "satyam",
//     price : 99
// }

function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObj(user); //Username is satyam and price is 99

handleObj({
    username : "satyam",
    price : 99
}) //Username is satyam and price is 99 // we can pass the object keys and values directly in the function calling instead of creating one 

// +++++++++ ARRAYS 

const myNewArr = [200,400,600,2499]
function returnSecvalue(getArray){
    return getArray[1]
}

console.log(returnSecvalue(myNewArr)); // 400