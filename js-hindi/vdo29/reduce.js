const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc,currval){
    // console.log(`acc is ${acc} and currval is ${currval}`);
    
    // return acc + currval
// },3)//initialize ,0 se hoga

// console.log(mytotal);

//now by arrow function

const newtotal = mynums.reduce((acc,currval) => acc + currval,0)
// console.log(`acc is ${acc} and currval is ${currval}`);

console.log(newtotal);


//
const shoppingcart = [
    {
        itemname : "js course",
        itemprice : 1099,
    },
    {
        itemname : "py course",
        itemprice : 299,
    },
    {
        itemname : "data course",
        itemprice : 399,
    },
    {
        itemname : "node course",
        itemprice : 499
    }
]

const pricetopay = shoppingcart.reduce((acc,item) => acc+item.itemprice,0)
console.log(pricetopay);


