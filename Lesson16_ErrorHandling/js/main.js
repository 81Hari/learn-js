"use strict"; // This make the Js to check the error strictly

/*

// Reference Error
variable = "Hari"; // variable not declared
console.log(variable);

*/

/*
// Syntax Error
Object..create();
*/

/*
// Type Error
const name = "hari";
name = "sri hari";
*/

// Try Catch
const makeError = () => {
  try {
    const name = "hari";
    name = "sri hari";
  } catch (error) {
    console.log(error); // Simply printing
    console.warn(error); // Warning
    console.error(error); // Error
    console.table(error); // Detailed Error

    // Fetching what we want

    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
};

makeError();

// Custom Error

const makeCustomError = () => {
  try {
    throw new customError("Newly Created Error");
  } catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
};

function customError(message) {
  this.name = "CustomError";
  this.message = message;
  this.stack = `${this.name}: ${this.message}`;
}

makeCustomError();

// Generic Error && Finally Block
let i = 0;
const makeGenericError = () => {
  while (i < 5) {
    try {
      if (i % 2 == 0) throw new Error("Generic Error (ODD Number)");
      console.log("Even");
    } catch (error) {
      console.error(error.name);
      console.error(error.message);
      console.error(error.stack);
    } finally {
      console.log(
        "Finally Block will be Executed, either error is thrown or not"
      );
      i++;
    }
  }
};

makeGenericError();
