// OBJECT LITERAL --------->

const user = {
    username: "satyam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        //console.log("got user details from db");
       // console.log(`Username: ${this.username}`);
       //console.log(this);
    }

}
//console.log(user.username);
//console.log(user.getUserDetails()); 
//console.log(this); // here {} but in console it will have lot of content 

// CONSTRUCTER FUNCTION ----------->
// new keyword is used to create new context , or a constructor function() everytime gives new instance 
//const promiseOne = new Promise()
//const date = new Date()

function three(username,loginCount,isLoggedIn) {
    this.username = username
    //left(variable name) = right(the passed value in block)
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function (){
        console.log(`welcome ${this.username}`);
    }
    return this
}

const userOne = new three("satyam",12,true)
console.log(userOne);
const userTwo = new three("satyam",12,true)
console.log(userTwo);
console.log(userOne.constructor);

// 1. with the new keyword everytime a new Object {} os created 

// 2. connstructor function is called from new keyword , it wraps all the argument given and gives to you 

// 3. all the wrapped argument gets injected in that this keyword 

// 4. u get it in function (){}

