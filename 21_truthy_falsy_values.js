// TRUTHY & FALSY VALUES

// FALSY VALUES
//    flase,0,-0,BigInt 0n , "",null ,undefined , NaN
//  TRUTHY VALUES
//    "0" , 'false' ," ",[] ,{} ,function(){}


 const userEmail="mudassar@gmail.com";
//  if(userEmail){
     
//  }else{

//  }


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


//NUllish Coalescing Oprator (?? ):null undefined

let val1;
// val1=5??10;
// val1=null??10;
// val1=undefined??15
// console.log(val1);

// val1=null ?? 10 ?? 20;

// Turnery oprator

let iceteaprice=100;
(iceteaprice>=50)?console.log('"more than 80"'):console.log("less than 80")