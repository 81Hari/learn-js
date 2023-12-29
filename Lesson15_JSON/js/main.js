/*

- JSON: JavaScript Object Notation
- JSON is used to send and receive data.
- JSON is a text format that is completely language independent.
- Meaning JSON is used to send & receive data in many languages not just in JavaScript.

*/

const myObj = {
  name: "Hari",
  role: "SDE",
  hello: function () {
    console.log("hello");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

//-------Create JSON-----------
const sendJSON = JSON.stringify(myObj); // Obj -> JSON

console.log(sendJSON);
console.log(typeof sendJSON);

console.log(sendJSON.name); //Unlike Objects, we can't access JSON file that

//-------Recieve JSON-----------

const receiveJSON = JSON.parse(sendJSON);

console.log(typeof receiveJSON);
