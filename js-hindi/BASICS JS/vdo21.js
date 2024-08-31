//scope kii kahani teen keyword se shuru hoti hai let const var
//{} isko hii mainly scope bolte hai

// let a = 20;
// const b = 30;
// var c = 40;// aur isko global scope likhege

// var c = 400
let a=500
if (true){//{} iske andar likhoge toh block scope hoga
    let a = 20;
const b = 30;
console.log("INSIDE: ", a);

var c = 40;
}


console.log(a);
//console.log(b);
// console.log(c);//yahi var ki prblm hai


