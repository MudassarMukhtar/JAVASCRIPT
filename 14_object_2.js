// OBJ SIGNLETON
// const tinderUser=new Object()
const tinderUser={}
tinderUser.id='01';
tinderUser.name="yasir";
tinderUser.email='ali@gmail.com';
tinderUser.islogin=true;

console.log(tinderUser.email);

const regularUser={
    name:'anas ',
    class: 6,   
    fullname:{
        userfullname:"muzammail",
        lastname:"mukhtar"
    }
};
// access nested value
console.log(regularUser.fullname.lastname);

// Merge objects like array
const obj_1={a:"1",b:"2",c:"3"};
const obj_2={d:"4",e:"5",f:"6"};
const obj_4={g:"7",h:"8",i:"9"};
// const obj_3={obj_1,obj_2}

// Object.assign({target},source1,source2....)
// const obj_3=Object.assign({},obj_1,obj_2,obj_4);
// console.log(obj_3);


// latest spread method ...like and array
const obj_3={...obj_1,...obj_2,...obj_4}
console.log(obj_3);

// access the value from database
const users=[
    {
        id : 1,
        email:"moon_1@gmail.com"
    },
    {
        id : 2,
        email:"moon_2@gmail.com"
    },
    {
        id : 3,
        email:"moon_3@gmail.com"
    },
];

// access by specific index number 
users[1].email;
// Or 
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(Object.keys(tinderUser.hasOwnproperty('islogin')));