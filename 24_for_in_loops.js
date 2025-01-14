// higher order array loops

// for of(on array)
//for in (on objects)
//for each (on array)

// ["","",""] object
// [{},{},{}] arrays inside object


//FOR IN LOOP 
const object={
    rb:'ruby',
    js:'javascript',
    cpp:'c++',
    swift:'swift by apple'
}
for (const key in object) {
   // console.log(`${key} is shortcut for ${object[key]}`);
}

const arr_1=['1','2','3','4'];
for (const key in arr_1) {
    //console.log(key)//values
}

for (const key in arr_1) {
    //console.log(arr_1[key])//index
}

