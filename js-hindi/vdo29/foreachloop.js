// call back fuction me function name nhi dtet
const coding = ["java","python","ruby","kolin",1]

// coding.forEach(function (val){
//     // console.log(val);
//     // console.log(typeof val);
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
    
// } 
// coding.forEach(printMe)



const mycoding = [
    {
        languagename : "javascript",
        langfilename : "js",
    },
    {
        languagename : "java",
        langfilename : "java",
    },
    {
        languagename : "python",
        langfilename : "py",
    }
]
mycoding.forEach((item) => {
    console.log(item.langfilename);
    
})