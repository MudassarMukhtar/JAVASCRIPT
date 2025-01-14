const coding= ["ruby","js","html","css"];

coding.forEach(function(item){
    //console.log(item);
})


// in for-each loop we javascript cant be able to store in varriables
// const values=coding.forEach(function(item){
//     console.log(item);
// })


//to avoide this issue javascript introduce Filter() 
// FILTER() => WILL FILTER VALUES ACCORDING TO YOUR CONDITIONS
const score=[1,2,3,4,5];
const specific_score=score.filter((scr)=>(scr>=3));
// console.log(specific_score);


const courses=[
    {
        course_name:'Js',
        price:100
    },
    {
        course_name:'Ruby',
        price:999
    },
    {
        course_name:'C++',
        price:700
    }
]
const price=courses.filter((subject)=>(subject.price>=700));
// console.log(price);



// map() => WILL MAP THE ARRAY VALUE IN TO array and return same array with new values 

const arr_1=[10,20,30,40,50,70];
const new_arr=arr_1.map((values)=>(values*2))
//console.log(new_arr);

//Chaining Map(use 2 or more then 2 methods map().map().filter() the second map will contain first map array and so on..)
const arr_2=[10,20,30,40,50,70];
const new_arr_2=arr_2
.map((arrvalues)=>(arrvalues*2))
.map((arrvalues)=>(arrvalues+1))
.filter((arrvalues)=>(arrvalues>=100))
// console.log(new_arr_2)


//Reduce()
//count the sum of value
//accmulate_value,current_val,intial_val
let mynum=[1,2,3,4,5]
// const num=mynum.reduce(function(acc,curr_val){
//     return acc+curr_val
// },1) //intial_val
// console.log(num)
const num=mynum.reduce((accmulate,current_val)=> accmulate+current_val,0);//here intial_val=0
//console.log(num);

const sesional_courses=[
    {
        course_name:'Js',
        price:100
    },
    {
        course_name:'Ruby',
        price:999
    },
    {
        course_name:'C++',
        price:700
    },
    {
        course_name:'Html',
        price:99
    },
    {
        course_name:'Css',
        price:1999
    }
]

//take value greater than 999 and sum their price

const total_price=sesional_courses.filter((course)=>(course.price>=999)).reduce((acc,curr_val)=>(acc+curr_val.price),0)
console.log(total_price);
