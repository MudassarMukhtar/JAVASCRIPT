
//object constructer
// Object.create


//SYMBOL?SYMBOL IN OBJ?
let mysym=Symbol('symbol_1');

// OBJect littrals
let jsuser={
    name:"ali",
    age:33,
    location:"lahore",
    email:'mudassarmukhtar452@gmail.com',
    islogin:false,
    [mysym]:"symbol_1",
    lastlogindays:['mon','tue'],
};





//HOW TO ACESS OBJECT ELEMENTS? WITH DOT OR [] BRACS
console.log(jsuser.name);
// OR
console.log(jsuser['location']);


// Access any symbol key from object
console.log(jsuser[mysym]);

// CHANGE/UPDATE ANY VALUE IN OBJECT 
jsuser.name='HAROON';
console.log(jsuser.name);

//LOCK ANY VALUE USEING OBJECT.FREEZE(OBJNAME);

// Object.freeze(jsuser);
    // jsuser.email="MUDASSAR@GMAIL.COM"//WILL NOT CHANGED BECAUSE OBJECT IS FREEZE OR LOKCKED NOW
   // console.log(jsuser.email);

//ADD FUNCTION IN OBJ?
jsuser.greeting = function(){
    console.log('hello js user');
}

console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`hello js user i am ${this.age} years old`);
}

console.log(jsuser.greetingtwo());




