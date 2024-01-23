// THIS is used to refer the current context 
const user={
    username : "satyam",
    price : 999,
    welcomeMess : function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        // {
        //     username: 'satyam',
        //     price: 999,
        //     welcomeMess: [Function: welcomeMess]
        //   }
    }
}

// user.welcomeMess() // satyam, welcome to website 
// user.username = "priya"
// user.welcomeMess() // priya, welcome to website 

//console.log(this);//{}

/*

function chai(){
    let username = "Satyam"
    console.log(this.username); // undefined ,,, This is context is just working in OBJECT (this) keyword not in Function , so we can not use this.xxxxxx something in function , but can in object,.. and Also here if we just print this in console it will have some properties and data inbuilt not like printing this outside as empty object {}
}

chai()

const chai = function(){
    let username = "Satyam"
    console.log(this.username);//undefined
}

*/
//++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++

// just remove the function keyword and put one arrow => sign after the () , so it looks like below ::

const chai = () => {
    let username = "Satyam"
    console.log(this.username); // undefined
    console.log(this); // {} empty object in the function , not like the regular function.
}

//chai()

//SYNTAX  ----- const add2 = (num1,num2) => {}
const add2 = (num1,num2) => {
    return num1 + num2
}
console.log(add2(4,7)); // 11

//IMPLICIT RETURN ,meaning without {} and a return keyword , as the JS understands that this should be returned and is written in one line 

//const add3 = (num1,num2,num3) => num1 + num2 + num3 ;

//if we use {} then we need to write return keyword , so we can use ()paranthesis and no return keyword 

const add3 = (num1,num2,num3) => (num1 + num2 + num3) ;
const add4 = (num1,num2,num3) => ({username : "satyam"}) // {username : satyam}

console.log(add3(2,4,6)); // 12
console.log(add4()); // { username: 'satyam' }

