//PRIMITIVE / 

// 7 types :String,number,Boolean,null(empty),undefined(not sure),Symbol(unique),BigInt

//Javascript is dynymically typed language
const score=100;
const scoreval=100.3;

const islogin=false;
const outsidetemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//false




// NON PRIMITIVE type (Refrence type)
// Array,Object,functions

//array
const heros=["ali","abubakar","usman"];
//object
let obj={
    name:"ali",
    age:30,
};
//function
function userEmail(email){
    return email
}
console.log(userEmail("abc@gmail.com"));
//function store in to a varriable
const fun=function(userval_1){

    console.log("hello")
}
