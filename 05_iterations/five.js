// ++++++++++++++++++++ FOR EACH LOOP +++++++++++++++++++++++

const coding = ["js","cpp","ruby","py","java"]

//A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.Performs the specified action for each element in an array.A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// CALLBACK FUNCTION -----
// 1.  we don't name the function 
// 2.  we do not have to give any value or expression in parameter , for Each() will automatically call all the values of that Array .

coding.forEach(function (item){
    //console.log(item);
})
// js
// cpp
// ruby
// py
// java

// We can use the ARRAW FUNCTION as in CallBackFn .

coding.forEach((val) => {
    //console.log(val);
})
// js
// cpp
// ruby
// py
// java

function printMe(item){
    //console.log(item);
}

coding.forEach(printMe)
// js
// cpp
// ruby
// py
// java

coding.forEach( (item,index,arr) => {
    //console.log(item,index,arr);
})
// js 0 [ 'js', 'cpp', 'ruby', 'py', 'java' ]
// cpp 1 [ 'js', 'cpp', 'ruby', 'py', 'java' ]
// ruby 2 [ 'js', 'cpp', 'ruby', 'py', 'java' ]
// py 3 [ 'js', 'cpp', 'ruby', 'py', 'java' ]
// java 4 [ 'js', 'cpp', 'ruby', 'py', 'java' ]

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

myCoding.forEach( (item) => {
     console.log(item.langFileName);
})
// Js
// py
// Cpp

