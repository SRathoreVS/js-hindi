// STRINGS : ""/''/`` 

const name = "satyam";
const repoCount = 13 ;
console.log(name + repoCount); // satyam 13 (concatenating)

console.log(`hello my name is ${name} and my repo count is ${repoCount} in my GitHub`);

const gameName = new String("satyam")
console.log(gameName[0]); // s 
console.log(gameName.__proto__); //{}

console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // SATYAM
console.log(gameName.charAt(2)); // t 
console.log(gameName.indexOf('t')); // 2 

const newStr = gameName.substring(0,4) // (start no. , end num(which wont be included)) saty (o/p)

const slice = gameName.slice(-5,4) // (start num, end num(last doesnot print)) can use negative value to start from end rev order . 
console.log(slice); //aty 

const newStr1 = "     satyam    "; 
console.log(newStr1);
console.log(newStr1.trim()); // removes the extra spacing from the values 
//trimStart() start space , trimEnd() end space

const url = "https://satyam.com/satyam%20rathore"
console.log(url.replace('%20','-'));//to replace the part of value with some other value .

console.log(url.includes('mama')); // false , to check wether it contains it or not 

console.log(gameName.split('-')); //(separator ,limit)
console.log(url.bold()); 
