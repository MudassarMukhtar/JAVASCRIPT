// string donetion
// ' single quote '
// " double quote "
// ` tamplate litterls `


console.log(' single quote ');
console.log(" double quote ");
console.log(` tamplate litterls `);//recomended way

//concat

const name ="ali";
const age=50;

console.log(`hello my ${name} and i am ${age} years old `)
console.log(name.concat(age));


// string declaration
let gamename= new String("    mynameisali    ")//string as an object

//access key value pair in string
console.log(gamename[0]) 
console.log(gamename.__proto__)


//STRING METHODS 

console.log(gamename.length)

console.log(gamename.toLocaleUpperCase())

console.log(gamename.toLocaleLowerCase())


console.log(gamename.charAt(2))//to check which chracter at specific potion 

console.log(gamename.indexOf('l'))//to check the location of any chracter

// create a new string from existing string
//SUBSTRING
const newstring=gamename.substring(0,1)//start and end position for new string creation always takes values in poitive
//SLICE
const anotherstring=gamename.slice(-7,2)//start from end


//TRIM
console.log(gamename.trim())//remove spaces from start and end 
//REPLACE
const url="http//mudassar.com/mukhtar%20-joyia";
console.log(url.replace('%','-'));
//INCLUDE()
console.log(url.includes('mukhtar'))// if exist then returns true otherwise false

console.log(url.split('-'));//whereever '-' comes in string it will saprates the string and creat an array

