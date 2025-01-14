// conditional statments
// conditions
// <,>,==,<=,=>,!=

// const isUserLoggedIn=true
// if (isUserLoggedIn==true) {
//      console.log("user is logged in");    
// }
const temeprature=42;
// if (temeprature<50) {
//     console.log("weather is not firey today");
// }else{
//     console.log("temrature is firey today")
// }

const score=200;

// if(score>100){
//     let power ="fly";
//     console.log(`user power: ${power}`)
// }
//console.log(`user power: ${power}`)//power isnt defined due to power local scope

const ballance=1000;
// if(ballance>500) console.log("test"); you can like this but this make code not good readable for reader

// if(ballance<500) {
//     console.log("ballance is less than 750");
// }else if (ballance<750){
//     console.log("ballance is less than 750");
// }
// else if (ballance<900){
//     console.log("ballance is less than 750");
// }else{
 
//         console.log("ballance is less than 1200");
// }

const isUserLoggedIn=true
const debitcard=true
const isUserLoggedInfromgoogle=false
const isUserLoggedInfromemail=true
if (isUserLoggedIn && debitcard && 2==3){
    console.log("allow to buy course ");
}
if (isUserLoggedInfromemail || isUserLoggedInfromgoogle) {
    console.log("User is Logged In")
}


//Switch
const month=3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    default:
            console.log("default case match")
            break;
}

// if string in switch

const MonthName="Jan"

switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("Febrery")
        break;
    case "mar":
        console.log("March")
        break;
    case "apr":
        console.log("April")
        break;
    default:
            console.log("default case match")
            break;
}



