// ES6 

// whenever we initialize a new object of use that 'new ' keyword constructor will be called 
// no need to write function keyword here we call them methods 
class User {
   constructor(username,email,password){
      this.username = username;
      this.email = email;
      this.password = password;
   }

   encryptPassword(){
      return `${this.password}abc`
   }
   changeUserName(){
      return `${this.username.toUpperCase()}`
   }
}

const chai = new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());//123abc
console.log(chai.changeUserName());//CHAI

// behind the scene

function user(username,email,password){
   this.username = username;
   this.email = email;
   this.password = password;
}

user.prototype.encryptPassword = function(){
   return `${this.password}abc`
}
user.prototype.changeUserName = function(){
   return `${this.username.toUpperCase()}`
}
const tea = new User("chai","chai@gmail.com","123")
console.log(tea.encryptPassword());//123abc
console.log(tea.changeUserName());//CHAI