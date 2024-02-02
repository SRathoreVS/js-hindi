// +++++++++++++++++++ WHILE LOOP +++++++++++++++++++

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index += 2
}
// value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

let myArray = ['a','b','c','d']
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++ // arr += 1
}
// value is a
// value is b
// value is c
// value is d

//+++++++++++++++++++ DO WILE LOOP ++++++++++++++++++

// do {
    
// } while (condition);
//first do the work then check the condition
// it will work for 1 time then it will check condition and if it wont meet the codition then also it will run once and get out of code 
let score = 11
do {
    console.log(`Score is ${score}`); // Score is 11
    score++
} while (score <= 10);
// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// Score is 6
// Score is 7
// Score is 8
// Score is 9
// Score is 10