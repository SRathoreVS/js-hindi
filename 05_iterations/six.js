const myCoding = [
    {
        langName : "Javascript",
        langFileName : "Js"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "C++",
        langFileName : "Cpp"
    }
]

// forEach Loop never return something its Undefined 

const values = myCoding.forEach((item) => {
    //console.log(item);
    return item  // undefined
})
//console.log(values);
// { langName: 'Javascript', langFileName: 'Js' }
// { langName: 'python', langFileName: 'py' }
// { langName: 'C++', langFileName: 'Cpp' }
// undefined

//+++++++++++++++++ FILTER ++++++++++++++++++++++

//as we know ForEach do not return the value , but the foilter does , it also takes the parameter as CALLBACK function ,and if we need we can return values here 
const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })
//console.log(newNums); // [ 5, 6, 7, 8, 9 ]

const newNums = []

// using same process with ForEach , here we need to write the logic for the whole thing .

myNums.forEach( (num) => {
    if (num>4) {
        newNums.push(num)
    }
})
//console.log(newNums);// [ 5, 6, 7, 8, 9 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => {
    return bk.genre === 'History'
  })
 // console.log(userBooks);
//   [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

const userBooksY = books.filter( (bk) => {
    return (bk.publish >= 1995 && bk.genre === 'History')
  })
  console.log(userBooksY);
//[
    // {
    //     title: 'Book Five',
    //     genre: 'Science',
    //     publish: 2009,
    //     edition: 2014
    //   },
    //   {
    //     title: 'Book Eight',
    //     genre: 'Science',
    //     publish: 2011,
    //     edition: 2016
    //   }
    // ]
   
