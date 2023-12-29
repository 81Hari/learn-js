//Challenge -1

// write code that will return a random letter from your name

const myName = "SRIHARI";
const num = myName.length;

const randNum = Math.floor(Math.random()*num);

console.log(myName.charAt(randNum));

