// 01 Array 

const myArr = [0,1,2,3,4,5]; // collection of multiple values and nested array and it can have mixed dataypes 

const heroes = ["superman","hanuman","nagraaj"]
const myArr2 = new Array(0,1,2,3,4,5);

console.log(myArr2[0]); // 0 how to retrieve values using indexing 

// ARRAY METHODS : +++++++++++

myArr.push(9); // used to add values at the end of the array 
console.log(myArr); // [0,1,2,3,4,5,9]

myArr.pop(); //used to remove the alue at the end of the array 
console.log(myArr); //[0,1,2,3,4,5]

myArr.unshift(0); // used to add the element at the start of the array 
console.log(myArr); // [0,0,1,2,3,4,5]

myArr.shift();// used to remove the element at the start of the array 
console.log(myArr); // [0,1,2,3,4,5]

// Array Questionnaire ++++++++++ contains or not 

console.log(myArr.includes(8)); // false
console.log(myArr.indexOf(9)); // doe not exist so value will be -1

const newArr = myArr.join();
console.log(newArr); // converted to string comma separated 

// slice , splice (major difference)

console.log("A",myArr); //A[0,1,2,3,4,5]
const myNewArr1 = myArr.slice(1,3); //start from 1 , last not included 3rd one here 
console.log(myNewArr1); // [1,2]
console.log("B",myArr); // B[0,1,2,3,4,5]

const myNewArr2 = myArr.splice(1,3);
console.log(myNewArr2); // [1,2,3]
console.log("C",myArr); // using Splice() orignal array gets manipulated as spliced values gets out of the orignal array here the O/P is : [0,(1,2,3)out,4,5] therefore [0,4,5]

