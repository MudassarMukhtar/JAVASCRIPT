// immediately invoked function expression (IIFE)
//uses
//avoid globel scope polution
//

(function chai(){
    console.log(`DB CONNECTED`)
})();// ()1st bracs hold function and 2nd () take as function call
//DONT FORGET ; SEMICOLON AT END OF IIFE
// arrow function AS IIFE 
(()=>{
    console.log(`ARROW FUNCTION as IIFE`)
})();

// arrow function WITH PARAMETERS AS IIFE 
((name)=>{
    console.log(`ARROW FUNCTION with parameter as IIFE ${name}`)
})(`Mudassar`);