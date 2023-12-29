//Arrays

const myArray = []; // empty array

/*
 we declare array as const to avoid reassigning the array 
we can modify the data inside the array.

E.g:
const myArray = [];
myarray =1;
we can't do this.
 */

myArray[0] = 1;
myArray[1] = "Hari";
myArray[2] = false;

console.log(myArray);

//length
console.log(myArray.length);

//push
let newLength = myArray.push("Restive");
console.log(myArray);
console.log(newLength);
//pop
let poped = myArray.pop();
console.log(myArray);
console.log(poped);

//unshift
myArray.unshift(90);
console.log(myArray);

//shift
myArray.shift();
console.log(myArray);

//delete
delete myArray[1];
console.log(myArray);

//splice
myArray.splice(1,2,1,2);
console.log(myArray);