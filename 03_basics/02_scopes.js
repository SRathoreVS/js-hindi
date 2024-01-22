// let , var , const 
let a =300;

if(true){ // {} are scopes , comes with function or if else or loops
    let a =10
    const b = 20
    console.log("inner :", a); //inner : 10
}  
//Since everything is defined inside the {} , its scope says it can not be accessed outside , so only can perform its functionality inside the {} , which works only be using LET and CONST Keyword. 

console.log(a) //300
//console.log(a); // 'a' is not defined  (LET)
//console.log(b); // 'b' is not defined  (CONST)
//console.log(c); // 30 var does not follow the scoping scenario

/*
GLOBAL SCOPE
(anything you write in GLOBAL SCOPE is accessible in the BLOCK SCOPE )

//if(){BLOCK SCOPE
   1.)can access all from GLOBAL SCOPE
   2.)values written in BLOCK SCOPE should not go outside not accessible outside.
}
*/

// GLOBAL SCOPE used in console is differently scoped 
// GLOBAL SCOPE used in terminal using NODE is differnt.

//++++++++++++++ NESTED SCOPES ++++++++++++++++

function one(){
    const username = "satyam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // Website is not defined as its being called out outside of its scope .

    two()
}

// one() 

if(true){
    const username = "satyam"
    if(username === "satyam"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // scope is in the above scope "website is not defined"
}
//console.log(username); // usernam is also not defined 

// ++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

//1.)+++++++++++ NORMAL FUNCTION ++++++++++
//_________________________________________
addOne(5) // 6

function addOne(num){
    return num + 1
}
// we can call fuction before its execution and it will work fine with no eror 

//2.)+++++++ EXPRESSION +++++++++++
//_________________________________________
addTwo(6) // 8
const addTwo = function(num){
    return num + 2 
}
// Cannot access 'addTwo' before initialization , as we have declared a function and we had it hold in a Variable const "addTwo" , 
