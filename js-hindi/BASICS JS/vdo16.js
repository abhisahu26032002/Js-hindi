// singleton //jab bhi literals ki trh decalare krege toh singleton nhi hoga
//constructor se hi humesha singleton banega

//obj literals
//object declaration//
//1) object.create

const symbol1 = Symbol("@") 
const user1 = {
    name : "ABHI",
    "fullname" : "ABHI_SAHU",
    email: "abhisahu1289@gmail.com",
    [symbol1] : "@",//agr symbol ki trh use krna hai toh sq bracket me likho symbol1 ko
    age : 19,
    location : "jhansi",
    isloggedin : false,
    lastloggindays : ["monday" , "sunday"]
}
console.log(user1.email);
console.log(user1['email']);
console.log(user1.fullname);//aise bhi krskte hai aur
console.log(user1["fullname"]);//aur aise bhi

console.log(user1.symbol1);
console.log(typeof user1.symbol1);
console.log(user1[symbol1]);

user1.email = "abhisahu@chatgpt.com"
console.log(user1);
//Object.freeze(user1);
user1.location = "noida"
console.log(user1);


user1.greeting = function(){
    console.log("hello abhisahu");
}

console.log(user1.greeting());

user1.greetingtwo = function(){
    console.log(`hello this is my name , ${this.name}`);
    
} 
console.log(user1.greetingtwo());



 





