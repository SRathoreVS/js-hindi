// IF -Statement 
// if the condition in the IF is TRUE then only the code in its scope will get executed 
const isUserLoggedIn = true
const temp = 41

if(temp < 50){
   console.log(`the current temparature is ${temp}`);
}//the current temparature is 41
else{
    console.log(`tempararture is greater than 41`);
}

//+++++++++++++ COMPARISON OPERATOR +++++++++++++++++
// < , > , <= , >= , == (= means its an assignment operator) , (== to check whether its same or not) , != (not equal) , === (to check if the value and type both are same or not , eg: [2 === "2"]{O/P = false}) , !==

const score = 200 ;

if(score > 100){
    const power = "fly"
    console.log(`User power ${power}`); //User power fly
}
//console.log(`User power ${power}`); 
//ReferenceError: power is not defined , it is due to scope of that power variable it is defined inside of the if statement , and can not be accessed outside if we use VAR , it will be accessed .

//++++++++++++++++++++ SHORT HAND NOTATION +++++++++++++

const balance = 1000

//implicit declared condition without {}
//just one line code 
if(balance > 500) console.log("test"); 

//+++++++++++++++++++++++ NESTING +++++++++++++++++++

if(balance < 500){
    console.log(`less than`);
}
else if(balance < 750) {
    console.log("less than");
}
else{
    console.log(`balance is ${balance}`);
} // balance is 1000


const UserLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

// we use && , to check multiple conditions whether its correct then only go inside of the code block , and execute further  
// all the statements mentioned by using && should be true then only it will go in block code 

// we use || pipe symbol as OR operator , if either of the statement is true , then the block code will be executed . we can check with multiple conditions ,even if one is true .

if (UserLoggedIn && debitCard && 2==2){
   console.log(`allow to buy courses`);
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log(`user is logged in.`);
}
