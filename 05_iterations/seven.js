// +++++++++++++++++++++ MAP  +++++++++++++++++++++
// MAP also takes call back function
const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.map( (num) => num+10)
//console.log(newNums); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

const newForEach = myNums.forEach( (num) => {
    return num+10
})
//console.log(newForEach); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20] undefined

// ++++++++++++++++ CHAINING +++++++++++++++++++

newNums = myNums
.map( (num) => num * 10)
.map( (num) => num + 1) //[11, 21, 31, 41, 51 ,61, 71, 81, 91, 101]
.filter( (num) => num >= 40) //[41, 51,  61, 71, 81, 91, 101]

console.log(newNums);
