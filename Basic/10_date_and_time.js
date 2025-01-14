console.log("date and time");

//DATE
let mydate=new Date();
console.log(mydate);//2024-12-08T09:37:35.101Z
console.log(mydate.toString());//Sun Dec 08 2024 15:36:38 GMT+0500 (Pakistan Standard Time)
console.log(mydate.toDateString());//Sun Dec 08 2024
console.log(mydate.toLocaleString())//12/8/2024, 3:42:13 PM
console.log(typeof mydate)//date is an object

//If you want to declare your own date

let myCreateDate=new Date(2024,11,8,6,6);
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

//TIME STAMP
let mytimestamp=Date.now()
console.log(mytimestamp);

console.log(myCreateDate.getTime());//time will comes in mili seconds 
console.log(Date.now()/1000)//date in miliseconds
console.log(Math.floor(Date.now()/1000));//will take floor value 

//DATE SPECIFIC METHODS
let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());

//you cant customize date format youself as well by uodating object
console.log(newDate.toLocaleString('default',{
    weekday:"short",
}));