// print cart values
function calculatecartprice(...number1)//rest oprator will make an Array of value coming from fun call
{
    return number1
}
// console.log(calculatecartprice(10,20,30,40));
function calculatecartprice(val1,val2,...number1)//val1 and val2 will cover first two places and rest of the values by rest oprator will make an Array of value coming from fun call
{
    return number1
}
// console.log(calculatecartprice(10,20,30,40));

//OBJECTS IN function
//call and object into function
const user={
    username:"mudassar",
    age:26,
};
function handleobject(objectval){

    return `my name is ${objectval.username} and i am ${objectval.age} years old`
}
// console.log(handleobject(user))

// another way to pass and object in to function directly pass object 

// console.log(
    handleobject({
    username:"mudassar",
    age:26,})
// )

//ARRAYS IN FUNCTION 
const myNewArray=[100,200,300,400,600];
function returnSecondValue(getArray){

    return getArray[1];
}
console.log(returnSecondValue(myNewArray))
// OR pass array inside function call 
console.log(returnSecondValue([100,200,300,400,600]))