// Immediately Invoked Function Expression (IIFE)

//sometime we write a function but whike execution the function gets pollutrd as many different lines of code get written inside it or its scope so to avoid it and call the function on that instance itself we use IIFE 
// to remove the pollution of global scope we use IIFE
//+++++++++++++++ SYNTAX ++++++++++++++++++
// declare the function iside of the () and at the end call the function using just the ().

// after every IIFE we need to have an ; semi-colon so to IIFE should know where to end the execution , otherwise if we call another IIFE , it will throw the error , so we need to put ;

(function chai(){
    // named IIFE
    console.log("DB CONNECTED"); //DB CONNECTED
})() ;

// (function)()

//++++++++++++++++ IIFE for ARROW() +++++++++++++

( (name) => {
    // Unnamed IIFE
    console.log(`DB is CONNECTED ${name}`);
})("satyam"); //DB is CONNECTED ,,,,, DB is CONNECTED satyam