class User {
    constructor(username){
       this.username =username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    // static used to not to make the function accessible as public , so it can noyt be accessed by anyone 
    static createId(){
        return `123`
    }
}

const satyam = new User("Satyam")
//console.log(satyam.createId()); 

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone","i@phone.com")
console.log(iphone.logMe);//[Function: logMe]