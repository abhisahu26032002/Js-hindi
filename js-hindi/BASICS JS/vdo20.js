///... is known as spread and rest operator

function Calculatecartprice(...num1){
    return num1
}
//console.log(Calculatecartprice(200,400,5000));//rest operator is used


//objects with function

const user = {
    username : "ABHISAHU",
    price : "₹1099"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
//handleObject(user)

//or

// handleObject({
//     username: "abhishek sahu",
//     price: 999
// })


//arrays with function

const mynewarray = [100,200,300,400,500,600,700]

function returnsecondvalue(getarray){
    return getarray[2]
}
//console.log(returnsecondvalue(mynewarray));//300
//console.log(returnsecondvalue([100,200,900,800]));






