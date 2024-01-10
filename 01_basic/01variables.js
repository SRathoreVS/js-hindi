const accountId = 14442 ;
let accountEmail = "satyamchelse123@gmail.com";
/* prefer not to use VAR 
issue in function scope and block scope */ 
// due to SCOPING issue VAR was reduced and in ES6 let was introduced (global scope)
var accountPassword = "S@tya";
accountCity = "varanasi"; // default variable is VAR .
let accountState ;

//accountId = 2 ;  // TypeError : Assignment to constant variable .

accountEmail = "muushibuubu@munchu.com";
accountPassword = "12345";
accountCity = "vapi";

console.log(accountId); 
console.log(accountPassword); 
console.log(accountEmail); 
console.log(accountCity); 

//OR use console.table([.........]) property to print all the variables in one line 

console.table([accountEmail,accountId,accountPassword,accountCity ,accountState]);