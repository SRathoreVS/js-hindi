const score = 400 ; 
console.log(score);

const balance = new Number(1000); // dedicated way to define the type of the value as Number , as we know JS auto detects the data type of the variable 
console.log(balance);

console.log(balance.toString().length); // toString() to change the number to string type 
console.log(balance.toFixed(2)); // toFixed() for the precision of 2 in the given value 

const otherNo = 23.7678 ;
console.log(otherNo.toPrecision(3)); // 23.8 , precise and round of 

const hundreds  = 100000000 ;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 

// Number.MAX_VALUE ; Number.MIN_VALUE (to get the Maximum and Minimum of the Number values . )

//++++++++++++++++++++++   MATHS  ++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // absolute value -ve to +ve
console.log(Math.round(4.6)); // round of thr number 5
console.log(Math.ceil(4.2)); //ceil() as in ceiling or TOP value so even if the value is little more it will be round off to the next value as 5

console.log(Math.floor(4.2)); // 4 floor down value 

console.log(Math.min(4,3,6,8)); // 3
console.log(Math.max(4,3,6,8)); // 8

console.log(Math.random()); // random values each time 
console.log(Math.floor(Math.random()*10) + 1); // to avoid 0 values 

const min =10 ;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1 )));
