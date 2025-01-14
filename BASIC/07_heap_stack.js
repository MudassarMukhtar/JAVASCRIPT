// stack (primitive)=>used in all primitive types always create a another copy of data
// heap  (Non-primitive)  =>used in all non primitive data types always take the refrence

// primitive

let myYoutubename ="wolrd view";

let anothername   =myYoutubename;
     anothername  ="chai or code";

console.log(myYoutubename);
console.log(anothername);


// non-primitive
let obj_1={
    name:"ali",
    age:40,
}

let obj_2=obj_1;
obj_2.name="mudassar";
console.log(obj_1.name);
console.log(obj_2.name);
