//+++++++++++++++++++ REDUCE +++++++++++++++++++++++
//() =>(),0 -----> 0 is initial value for 1st param
const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc ,curval) => {
    console.log(`acc : ${acc} and currVal : ${curval}`);
    return acc + curval
} , 0) 

console.log(myTotal); // 6

const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999
    },
    {
        itemName : 'python',
        price : 2999
    },
    {
        itemName : 'mobile dev course',
        price : 5999
    },
    {
        itemName : 'data science course',
        price : 12999
    },
]
const TotalPrice = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(TotalPrice); //24996