// if we are using getter then its mandatory to use setter as well otherwise we will get the error 

// GET = to get the value outside . SET = to set the value inside 

// GET =  always returns value  . SET = do not return 

// we can SET value different and GET the value different to s=user with attached some values to prevent from giving unique iD 

class User {
    constructor(email,password){
        this.email =email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const satyam = new User("S@tyam@gmail.com","abcdh") // ABCDH
console.log(satyam.password); // 123