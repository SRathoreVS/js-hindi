// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null >= 0); // true
// Comparision convert null to a number , treating it as 0.
// thats why (3) null >= 0 is true 
//and null > 0  is false 
console.log(null < 0); // false
console.log(null == 0); // false

// === not only values but also data types it check

console.log("2" == 2);   // true
console.log("2" === 2); // false 