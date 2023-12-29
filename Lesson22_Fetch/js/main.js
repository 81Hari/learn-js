/* 
Fetch API
1. Callbacks
2. Promises
3. Thenables
4. Async and Wait
*/
//---------------------------------------

// /* Callbacks---------------------------
// A callback is a function passed as an argument to another function
// */

// //syntax:
// function callback() {}
// function myfunc(para1, para2, mycallback) {
//   callback();
// }

// myfunc(para1, para2, callback);
// //--------------------------------

// // Disadvantage of callback, the below code myfunc is called with multiple anonymous function and it is hard to read

// myfunc(para, function () {
//   secondFunction(para, function () {
//     thirdFunction(para, function () {});
//   });
// });

// // Callback End-------------------(LEGACY)

// //Alternative to Call-Back --> Promises

// /*
//  PROMISES

//  States
//  1. Pending
//  2. Fulfilled
//  3. Rejected

//  Note: JavaScript is Single Threaded Programming Language.

//  But When Promises are in pending javascript will run the rest of the code and once a promise is fulfiled it will run that code. (It looks like Multi threading)
//  */

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Resolved the Promise");
//   } else {
//     reject("No! Rejected");
//   }
// });

// console.log(myPromise);

// //Thennable --> Using thenables we can fetch the values from the promise, We can have multiple thennables and first thennable will executed and the second will be executed and there can be catch block to catch the error
// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("Time Delayed is 4sec");
//   }, 4000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });
// //----------------------------

// // Fetch API will return the promise, we don't want to create promises

// // Reason to have fetch API is to revieve data from the server

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// //pending state of promise
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });
// //---------------
// //Async / Await
// const myUsers = {
//   userList: [],
// };

// const asyncFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// const asyncFunction2 = async () => {
//   const data = await asyncFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// asyncFunction2();
// // Fetch()------------------------------
// Examples Getting Data's

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonUserData = await response.json();

  const userEmails = jsonUserData.map((user) => {
    return user.email;
  });
  createTable(userEmails);
};

const createTable = (data) => {
  console.log(data);
};

getAllUserEmails();

const getJSONDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jsonJokedata = await response.json();

  console.log(jsonJokedata.joke);
};

getJSONDadJoke();

const getTextDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });

  const textJokedata = await response.text();

  console.log(textJokedata);
};

getTextDadJoke();

//Example Posting Data's

const jokeObj = {
  joke: "Data",
};

const postJSONDadJoke = async (jokeObject) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  });

  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postJSONDadJoke(jokeObj);
