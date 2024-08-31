//this funtion current context ko define krta hai

// const user = {
//     username : "ABHISAHU",
//     price : 1099,

//     WelcomeMessage : function(){
//         console.log(`${this.username} , welcome to the website and you have success the price of ${this.price}`);
//         // console.log(this);
        
        
//     }

// }
// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()
// console.log(this);//kunki hum node environment ke andar hai


// arrow function me bss function keyword hatadete hai

const news = () => {
    //=>arrow function
    let username = "abhisahushr"
    console.log(this.username);
} 
// news()


const addtwo = (num1,num2) => {
    return num1+num2
} 
console.log(addtwo(5,6));

// implicit return

const subtwo = (num1,num2) => num1 - num2
console.log(subtwo(5,1));


//upr agr {} me wrap kia toh return keyword likhna padega 
//() isme wrap kia toh return keyword nhi likhna padega 


// agr object ko return krna hai () isme wrap krna padega 

const objectreturn = () => ({username : "abhishau"})//obj return
console.log(objectreturn());

