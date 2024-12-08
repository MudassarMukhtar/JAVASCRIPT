console.log("numbers and math");

const score=400;

// pre defiend as Number
const balance=new Number(100.12);
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1));//0ne number after fraction point

const othernum=23.8976;
console.log(othernum.toPrecision(4))// it will take 4 digits and also takes ciel of the last means 4th postioned element value .

//------+++++MATHs++++------


console.log(Math.abs(-4));//convert -ve values in to positive
console.log(Math.round(4.6));//round off
console.log(Math.ceil(4.2));//always round off in upper value
console.log(Math.floor(4.2));//

console.log(Math.random())//always take rendom value from 0 to 1
console.log(Math.random()*10)//any random value from 0to1 will multiply with 10 might be 0 as will
//if we dont want random value zero we will plus +1 after above mentioned number
console.log(Math.random()*10+1)

const min=10;
const max=20;
console.log(Math.ceil(Math.random()*(max-min+1)+min));// if we want a specific range of random numbers




