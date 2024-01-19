//+++++++++++++++ OBJECTS PART 2 ++++++++++++++++++++

const tinderuser = new Object();

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false


console.log(tinderuser); //{ id: '123abc', name: 'sammy', isLoggedIn: false }

const reguser = {
    email : "some@gmail.com",
    fullname : {
        username: {
            fname:"satyam",
            lName:"rathore"
        }
    }
}

console.log(reguser.fullname.username.fname); // satyam

const Object1 = {
    1: "a",
    2: "b"
}
const Object2 = {
    3: "a",
    4: "b"
}
const obj3 = {...Object1,...Object2} //  best choice 

//const obj3 = Object.assign(Object1,Object2);
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gamil.com"
    },
    {
        id: 2,
        email: "s@gamil.com"
    },
    {
        id: 3,
        email: "p@gamil.com"
    }
]
console.log(users[0].email); //h@gamil.com

// these methods all come in arrays [] , so we can apply loop over them in the Object .

console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser));//[ '123abc', 'sammy', false ]
console.log(Object.entries(tinderuser));//[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderuser.hasOwnProperty('isLoggedIn')); // TRUE , that means it has that property .

//++++++++++++ DESTRUCTURRING +++++++++++++++++

const course = {
    coursename: "JS in hindi",
    price: 999,
    Instructor: "satyam"
}
const {Instructor:ins} = course // const {the value which we want , and if name is long we can minimize using : name} = object name from value is req.
console.log(ins); // satyam

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//JSON 

// {
//     "name" : "satyam",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }