//for loop with break and continue 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i==5){
    //console.log("5 is the best number")
}
//console.log(element)
}

for (let i =1 ;i< 10 ;i++) {
    //console.log(`outer loop : ${i}`)
    for(let j=1;j<10;j++){
        //console.log(`inner loop :${j} and outer loop ${i}`)
       //console.log(`${i} * ${j} = ${i*j}`);
    }  
}

const arr=["heros","superheros","marvalheros","batman","spiderman"]
//console.log(arr.length)//length of array 5

for(let index=0;index< arr.length;index++){
    // console.log (arr[index]);
}

//Keywords
//Break & Continue

// for (let index = 1; index <=20 ; index++) {
//     if (index==5){
//     console.log(`Detected ${index}`);
//     break;// will not print after the contion is true
//     }
// console.log(`value of i is ${index}`);
// }

for (let index = 1; index <=10 ; index++) {
    if (index==5){
    console.log(`this will be skipped and rest of the values will printed ${index}`);
    continue;// will skip the spcific condition and print rest of the values
    }
console.log(`value of i is ${index}`);
}