// function saymyname(){
//     console.log("abhi");
//     console.log("is");
//     console.log("a");
//     console.log("good");
//     console.log("boy");
// }
// saymyname()//aise execute hota hai
// console.log(saymyname());//aur aise bhi

// function addtwonumber(Number1,Number2){
//     console.log(Number1 + Number2);
// }

// function addtwonumber(Number1,Number2){//return ke baad kuch bhi run nhi hota function me
//     let result = Number1 + Number2
//     console.log("abhisahu");
//     return result//or we return number1 + number2
//     //console.log("abhisahu");
    
// }


// // addtwonumber(5,5)//10
// // addtwonumber(3,"3")//33
// // addtwonumber(3,null)//3

// const result = addtwonumber(5,16)
// console.log("result:" , result );


function loginusermessage(username="abhisahu"){
    if(username === undefined){//  ==!username
        console.log("please enter a user-name");
        return
    }// to not print this below so give return
    if(username === ""){
        console.log("please enter something");
        return
    }
    return`${username} just logged in`
}


//loginusermessage("abhisahu")
//console.log(loginusermessage("abhisahu"));
console.log(loginusermessage(""));//undefined just logged in
//console.log(loginusermessage(""));//just logged in

console.log(loginusermessage());//
console.log(loginusermessage("abhisahujhannsi"));






 



