//ARRAY
// DECLARATION

const arr=[0,1,2,3,4,5];//COLLECTION DIFRENT ELEMENTS IN SINGLE VARRIABLE
console.log(arr[0]);//access array index value
//2nd way
const heros=["ali","abubakar","saheen"];

const arr_2=[1,2,3,4,5];
console.log(arr_2[0])//element at 0th postion

//Array is always makes shallow copies (whoes share same refrence points)

// Methods
console.log(arr.Push(5))//push element at end of the array
// console.log(arr.Pop())//pop element at end of the elememnt

// console.log(arr.shift())//remove first element of the array
// console.log(arr.unshift("bye"))//add new element at begning 

// console.log(arr_2.incules(7));//same as string method check value if it exist true otherwise false
// console.log(arr_2.indexof(4));//if this value exist in array it will retuens the index number otherwise -1
// //join
// console.log(arr.join);//bind all elements and change array types to string
// //slice,splice
// console.log(arr_2.Slice(1,3))//retuens a copy of an array exluding  =>(start index , end index) last index also excluded 
// console.log(arr_2.Splice(1,3))//including 
