//Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
//Math.PI = 3.14............

// the value cannot be changed as writable , enum, config are all false 

const desc = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log(`chai ni bani`);
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// here all the properties are true , so they are changeable 
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// how can we define our own properties here , and set our own hard coded value which everyone has to use and will not be changable 

// Object.defineProperty(chai, 'name' ,{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// looping 

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key}:${value}`);

    }
}