
console.log("M");
console.log("u");
console.log("d");
console.log("a");
console.log("s");
console.log("s");
console.log("a");
console.log("R");

//The above mentioned work with function 

function sayMyname(){
    console.log("M");
    console.log("u");
    console.log("d");
    console.log("a");
    console.log("s");
    console.log("s");
    console.log("a");
    console.log("R");
};
//function call
  //console.log(sayMyname());

//ADD TWO NUMBERS
//num1 ,num2 are parameters

function sum(num1,num2){

    //console.log(num1+num2);
}

//value for num1 ,num2 are arguments
sum(4,5);
sum(55,77);

function sum(Num1,Num2){

    //let result=Num1+Num2;
    //return result;

    return Num1+Num2;
}
const result=sum(55,88);
console.log(result);

//check user login 
function loginUserMessage(username ){
    return `${username} just logged in `
}
console.log(loginUserMessage("mudassar"));


//if argumenets are missing 
// 1-we can pass by default parameters which shown if arguments are missing
function loginUser(username="madi" ){
    return `${username} just logged in `
}
console.log(loginUser());//argument is missing


// 2-we can check by condition by if/else
function loginUserMessage(username ){
    if(!username)//if(username===undefined)
    {
        console.log("username value is missing ");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage());
