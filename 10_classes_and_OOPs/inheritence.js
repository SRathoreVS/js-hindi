// extends - inheritence , super () instead of call or bind , to directly access the mentioned method
class User {
    constructor(username){
        this.username = username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password){
        super(username); //Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@teacher.com","123")

chai.addCourse() // A new course has been added by chai
const masalaChai = new User("masalaChai")

masalaChai.logMe() //username is masalaChai

console.log(chai === masalaChai); // false
console.log(chai instanceof masalaChai); //true ......... instanceOf 