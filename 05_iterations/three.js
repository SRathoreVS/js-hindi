// ++++++++++++++++ FOR OF LOOP ++++++++++++++++++

// for (const iterator of object) {
    
// }

// iterator as in i,j or any variable name for iteration , OBJECT is not the obkject in jS here object as in language , used for Array , you wan to loop on which array .

// ARRAY specific loops 
// ["","",""]
// [{},{},{}] - object arrays 

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        //console.log(`-----------------`);
    }
    //console.log(`${greet}`);
}

// ++++++++++++++++++ MAPS +++++++++++++++++

//Map is same as OBJECTS but it has unique value it has fixed position and it can not hold any duplicate value .

const map = new Map()
map.set('IN' , "INDIA")
map.set('USA' , "United States of America")
map.set('FR' , "France")

console.log(map);
// Map(3) {
//     'IN' => 'INDIA',
//     'USA' => 'United States of America',
//     'FR' => 'France'
//   }

for (const [key,value] of map) {
    //console.log(key, ':-' , value);
}
// IN :- INDIA
// USA :- United States of America
// FR :- France

const myObj = {
    'game1' : "NFS",
    'game2' : "FIFA 23",
    'game3' : "outlast"
}
for (const [key,value] of myObj) {
    console.log(key, ':-' , value);
} //TypeError: myObj is not iterable