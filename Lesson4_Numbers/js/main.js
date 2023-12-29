// Numbers

const myNumber = 42;

// An Integer is a whole number
console.log(myNumber);

// A number with a decimal point is a float which reference the "Floating Point"

const myFloat = 42.0;


console.log(myFloat);

const myString = "42";

// Comparison
console.log(myFloat === myNumber);
console.log(myFloat === myString);

console.log(myFloat == myString)
//Double Equals (==) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.

//On the other hand, Triple Equals (===) does not perform type coercion. It will verify whether the variables being compared have both the same value AND the same type.

//Conversion

console.log(Number(myString+3));
console.log(Number(myString) === myNumber);

console.log(Number("Hari")) //NaN --> Not a Number

console.log(Number(undefined)); //NaN --> Not a Number

console.log(Number(true));
// true = 1

console.log(Number(false));
// false = 0

//Number Methods

// The Number.ismethod() method detremines whether the passed value is an Integer

console.log(Number.isInteger(myString));

/* The Number.parseFlaot() method parse an argument and returns a floating point number. If a number cannot be parsed from the arugument, it returns NaN./=> NaN 
*/

const alphanumber = "43.223abs"
console.log(Number.parseFloat(alphanumber));

/*
Difference b/w Number() and Number.parseFloat().
The internal workings are not that different. There is a difference though. Using parseFloat, a (trimmed) string starting with one or more numeric characters followed by alphanumeric characters can convert to a Number, with Number that will not succeed. As in:

parseFloat('3.23abc'); //=> 3.23
Number('3.23abc'); //=> NaN
*/

//The  toFixed() method formats a number according to how many decimal points you provide as the parameter

console.log(Number.parseFloat(alphanumber).toFixed(2)); // returns in string

// The Number.parseInt() method parses a string argument and returns an integer

console.log(Number.parseInt(alphanumber));

// The toString() method returns a string representing the number.
console.log(myFloat.toString());

//Nan is an acronym for Not a Number.

// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.

// The global isNaN() function determines whether a value is NaN or not.

console.log(Number.isNaN("Hari"));