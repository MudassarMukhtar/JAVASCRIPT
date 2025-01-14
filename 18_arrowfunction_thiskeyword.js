const user={
    username:"mudassar",
    price:999,
//this key word reffers current object
    welcomeMessage: function(){
        //console.log(`${this.username} , wellcome to website`)
        //console.log(this)
    }
}

// user.welcomeMessage();
// user.username="yasir";
// user.welcomeMessage();

// console.log(this)//this refers to empty object


//this key word will not access any value it will refres to undefiend
// function chai (){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();


// const chai=function(){
//     let username="hitesh";
//     console.log(this.username);

// }
// chai()

//ARRAOW FUNCTION

// const chai=()=>{

//     let username="hitesh";
//     console.log(this);//here in arrow function this key word will show empty bracs{ }
// }
// chai()


//EXPLICITLY RETURN ARRAOW FUNCTION
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,3));

//IMPLICITY RETURN ARROW FUNCTION(SHORTHAND ARROW FUNCTION)
const addtwo=(num1,num2)=>num1+num2 //NO RETURN KEY WORD /ANOTHER WAY (num1,mun2) 
console.log(addtwo(2,3));