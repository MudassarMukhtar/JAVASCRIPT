//for each
const coding=["js","c++","ruby","html"];
//conding.foreach(function will go here but without name and we will pass parameter which access the body of function)
// with normal function
//parameters (item=self defined name ,index=will show index number, arr=will show whole array )
coding.forEach(function(item,index,arr){
    //console.log(item,index,arr)//item=items in array & index=index number & arr= whole array is self passed parameter 
})


// with arrow function
coding.forEach((list)=>{
    //console.log(list)
})

//print me

function printMe(item){
    //console.log(item)
}
coding.forEach(printMe);


//access many objects indide an array with forEach loop

const mycoding=[
    {
        course:"front end",
        subject:"javascript"
    },
    {
        course:"Back end",
        subject:"sql"
    },
    {
        course:"basic",
        subject:"c++"
    }
]

mycoding.forEach((item)=>{
    // console.log(item.course)
    console.log(item.subject);
    
})