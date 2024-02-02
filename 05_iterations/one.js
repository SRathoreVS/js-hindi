//+++++++++++++++++ FOR SYNTAX ++++++++++++++++++

//SYNTAX

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
    
}

//console.log(element); //ReferenceError: element is not defined

// when we have the nested loops , and the iteration value is defined and does not depends on the parent loop the iteration begins for 1st tiime then goes to nested and child loop complete all its iteration and then again 2nd time parent loop runs and child loop then complete all its iteration.

// ++++++++++ PRINT TABLE FROM 1 TO 9 +++++++++++++++++

for (let i = 1; i < 10 ; i++) {
    //console.log(`outer loop ${i}`);
    for (let j = 1; j < 10 ; j++) {
        //console.log(`Inner loop value ${j} and outer loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash","batman","superman"]
console.log(myArray.length); // 3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

//break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
}
// break will throw you out of the execution when detected the condition falling in it 
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected 5

//using continue wont throw you out but will not print that line where continue was detected and go wit the execution of the code .
for (let index = 1; index <= 20; index++) {
    if (index % 5 == 0) {
        console.log(`detected Multiple of 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected Multiple of 5
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// detected Multiple of 5
// value of i is 11
// value of i is 12
// value of i is 13
// value of i is 14
// detected Multiple of 5
// value of i is 16
// value of i is 17
// value of i is 18
// value of i is 19
// detected Multiple of 5