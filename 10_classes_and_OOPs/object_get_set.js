const User = {
    _email: "satyamchelsea123@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password=value
    }
}
//Object to use as a prototype. May be null
//Creates an object that has the specified prototype, and that optionally contains specified properties.
const tea = Object.create(User)
console.log(tea.email); // SATYAMCHELSEA123@GMAIL.COM