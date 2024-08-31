// const coding =  ["java", "py" , "sql" , "js"]

// const values = coding.forEach((item) => {
//     console.log(item);
    
// })
// console.log(values);

//filer

const mynums = [1,2,3,4,5,6,7,8]

// const newnums = mynums.filter((num) => num>4)
// console.log(newnums);



const newnums = []

mynums.forEach((num) => {
    if (num > 4) {
        
        newnums.push(num)

    }
})
console.log(newnums);


