//const tinderuser = new Object()//singleton obj
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.age = 19
tinderuser.name = "abhisahu"

//console.log(tinderuser);

const regularuser = {
    email : "abhisahu1289@gmail.com",
    fullname : {
        userfullname : {//nested obj
            firstname : "abhi",
            lastname : "sahu"
        }
    }
}
//console.log(regularuser.fullname.userfullname);


const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "b" , 4: "a"}

//const obj3 = {obj1 , obj2}//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'b', '2': 'a' } }

//const obj3 = Object.assign({}, obj1 , obj2)//{} ye bss ek empty obj hai//{ '1': 'a', '2': 'b', '3': 'b', '4': 'a' }

const obj3 = {...obj1 , ...obj2}//{ '1': 'a', '2': 'b', '3': 'b', '4': 'a' }

//console.log(obj3);


//+++++++++++++++++array of objects+++++++++++++++++++++++++++++

const user = [

    {
        id : 1,
        email : "abhisahu1289@gmail.com"
    },
    {

    },
    {

    },
    {
        // {} ye objs hai
    },
]
user[2].email

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("full-name"));






