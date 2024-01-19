const marvelheroes = ['thor','ironman','spiderman']
const dc = ['superman','flash','batman']

marvelheroes.push(dc)
console.log(marvelheroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelheroes[3]); //[ 'superman', 'flash', 'batman' ]

// ++++++++++++++ CONCAT OPERATOR ++++++++++++++

const allheroes = marvelheroes.concat(dc)
console.log(allheroes);//[ 'thor', 'ironman', 'spiderman',  'superman', 'flash', 'batman'  ]

// ++++++++++++++ SPREAD OPERATOR ++++++++++++++

const all_new_heros = [...marvelheroes,...dc];
console.log(all_new_heros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// ++++++++++++++ FLAT() OPERATOR ++++++++++++++

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_arr); // value spread out even if it had all the nested arrays in it .
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("Satyam")) // false
console.log(Array.from("Satyam")) //[ 'S', 'a', 't', 'y', 'a', 'm' ] convert to array
console.log(Array.from({name:"satyam"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements. 
//[100,200,300]
