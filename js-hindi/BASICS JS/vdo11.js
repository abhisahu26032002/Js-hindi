//"hello" + " world"//srf console me run hoga bs
const name = "abhi-sahu"
const score = 90
//console.log(name +"score"+" value");//it is outdated

//console.log(`my name is ${name} and my score is ${score} and "is good boy"`);//"" ye nhi bhi chalega 
//isme uppercase bhi use krskte hai

//string declaration
const gamename = new String('abhisahu')
//console.log(gamename.length);//8
//console.log(gamename.toUpperCase(gamename));
//console.log(gamename.charAt(5));
//console.log(gamename.indexOf('h'));
//console.log(gamename[2]);
//console.log(gamename[0]);
//console.log(gamename.__proto__);//{} is a obj
/*
const newstring = name.substring(0,3)
console.log(newstring);

const anothernewstring = name.slice(-2,8)
console.log(anothernewstring);*/

/*const newname  = "   Shraddhatiwari     "
console.log(newname);
console.log(newname.trim());//space ko khtm krdeta hai
console.log(newname.trimEnd());
console.log(newname.trimStart());
*/
let email = "shraddhatiwari1289@gmail.com"
console.log(email.replace("@", "-"));//"" '' dono ek hi kaam krege

console.log(email.includes("-"));


//splitiing method kisi ke base pr saare elements nikal skte hai

const newgf = "shraddha-tiwari-is-my-gf"
console.log(newgf.split("i")); //srf i ko split krega