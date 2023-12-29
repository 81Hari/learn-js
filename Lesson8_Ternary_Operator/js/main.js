// Conditionals: Ternary Operator

// syntax
//condition ? ifTrue : ifFalse;

// let soup = "CN Soup";
// let response = soup ? "Yes" : "No";
// console.log(response);


// let soup = "CN Soup";
// let isCustomerBanned = false;
// let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today` : "No Soup";
// console.log(soupAccess);

let testScore = Math.floor(Math.random()*100 +1)
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "E";

console.log(testScore +" :"+myGrade);