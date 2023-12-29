// Strings

const myVariable = "Mathematic";

//The length property
console.log(myVariable.length);

// String Methods

console.log(myVariable.charAt(6));

console.log(myVariable.indexOf("at"));

console.log(myVariable.lastIndexOf("at"));

console.log(myVariable.slice(5,6)); // Only one character
console.log(myVariable.slice(6)); //From index 6 to last
console.log(myVariable.slice(7,6)); // Nothing is retuned

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

console.log(myVariable.includes("mat"));
console.log(myVariable.includes("mt"));

console.log(myVariable.split("t"));
console.log(myVariable.split(""));
