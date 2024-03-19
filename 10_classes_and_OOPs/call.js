function SetUserName(username) {
    //complex Db calls
    this.username = username
    console.log("called");
}

function createUser(username,email,password) {
    SetUserName.call(this,username)// this is not getting called here ,,,,,,,,,,so we use setUserName.call(param),,,,so it will get called ...............use 'this' for passing the context while calling .
    // this.username = username
    this.email = email
    this.password = password
}

// createUser {
//     username: 'Satyam',
//     email: 'satyamchelsea123@gmail.com',
//     password: '123'
//   }


const chai = new createUser("Satyam","satyamchelsea123@gmail.com","123")
console.log(chai); // createUser { email: 'satyamchelsea123@gmail.com', password: '123' }

