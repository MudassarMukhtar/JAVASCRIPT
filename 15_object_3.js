// object de-struccturing
// access object value without using dot notation 

const course={
    courseName :"js in urdu ",
    coursePrice:"999",
    courseInstructor:"mudassar"
}
// course.courseIstructer
// course.courseIstructer
// course.courseIstructer

//To avoid repeation

const {courseInstructor:Instructor}=course;//now we dont need to access value with dot we simply write courseInstructer and acces its value.
console.log(Instructer);
const {coursePrice:price}=course;//you can set your own name as well
console.log(price);


//  de-struccturing in React
const navbar=({company})=>{//{company} destructring in react just like js


}
navbar(company="cancordia college");

//APIs In the form of Object in json

{
    "courseName"  ;"js in urdu ",
    "coursePrice" ;999,
    "courseInstructor";"mudassar",
    "courselogin";true
}
//APIs In the form of Array in json
[
    
        "courseName"  ,"js in urdu ",
        "coursePrice" ,999,
        "courseInstructor","mudassar",
        "courselogin",true
    
]
