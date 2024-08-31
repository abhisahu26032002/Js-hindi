const marvel_heroes = ["iron-man","spiderman","thor"]
const dc_heroes = ["super-man","bat-man","flash"]

//console.log(marvel_heroes.push(dc_heroes));

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes[3][2])//3= elements and 2 is element in element

//marvel_heroes.concat(dc_heroes)
//console.log(marvel_heroes);

/////////////////////////
//ab merge krne ke liye hum ise kisi value me insert kradege 

//const allheroes = marvel_heroes.concat(dc_heroes)//
//console.log(allheroes);//

//const newheroes = [...marvel_heroes,...dc_heroes]//spread method hai
//console.log(newheroes);

//////////////////////////////////////

const newarray = [1,2,3,[4,5],6,[7,[8,9]]]
const newofnewarray = newarray.flat(Infinity);//1,2,3or infinity
console.log(newofnewarray);


console.log(Array.isArray("ABHI"));

console.log(Array.from("ABHI-SAHU"));

console.log(Array.from({name : "ABHI"}));//null array dega kunki ye convert nhi krapaega

let score1 = 500
let score2 = 300
let score3 = 800

console.log(Array.of(score1,score2,score3));












