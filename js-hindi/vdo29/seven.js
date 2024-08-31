const mynumbers = [1,2,3,4,5,6,7,8]

// const newnums = mynumbers.map((nums) => { return nums + 10})//agr {} isme le rhe toh return krana padega
const newnums = mynumbers.map((nums) => nums + 10)
// console.log(newnums);


//chaining

const newNums = mynumbers.map((nums) => nums*10).map((nums) => nums+1).filter((nums) => nums>=40)
console.log(newNums);

