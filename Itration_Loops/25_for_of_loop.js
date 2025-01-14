// for of on array
const array=[1,,2,3,4,5];
for (const numbers of array ) {
    //console.log(numbers);
}
//for of on string
const greetings="hello world!";
for (const greet of greetings) {
    if(greet==" ")
    continue;//skip epmty spaces
    //console.log(`Each char is ${greet}`);
}



// MAPS AND FOR OF LOOP ON MAP

// IS AN object which hole key value pair 
// string or numbers 
// no duplication only unique values

const map=new Map();
map.set('IND','INDIA')
map.set('GER','GERMANY')
map.set('BAN','BANGALDASH')
map.set('SIR','SIRLANAKA')
map.set('AUS','AUSTRALIA')

//console.log(map)

// for of loop on map
for (const key of map) {
    //console.log(key);
}

//if you want values of the map as well
for (const [key,value] of map) {
    //console.log(key,':-',value);
}

// for of loop will not works on object
const myobject={
    game1:'NFS',
    game2:'SPIDERMAN'
}
// for (const key of myobject) {
//     console.log(key);
// }