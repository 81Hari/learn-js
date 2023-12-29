/*
    Web Storage API
- Not part of the DOM - refers to the Window API
- Available to JS via the global variable: "window"

*/

//We do not have to type "window". It is implied:

// window.alert(window.location);
// alert(location);

/*
Two Types Of Storage
1. Session Storage -> Only Availabe for Session
2. Local Storage -> Available in Local Machine whenever you go back to the website you can retrieve the data.
*/
// window.localStorage or window.sessionStorage

const myLang = ["JS", "Java", "Python"];
const myObj = {
  name: "Hari",
  lang: myLang,
  logname: function () {
    console.log(this.name);
  },
};

sessionStorage.setItem("k1", myObj);
sessionStorage.setItem("k2", myLang);

console.log(sessionStorage.getItem("k1")); // We get unexpected output because session only stores string data. To over come this we store it in JSON format
console.log(sessionStorage.getItem("k2"));

sessionStorage.setItem("k3", JSON.stringify(myObj));
console.log(sessionStorage.getItem("k3"));
console.log(JSON.parse(sessionStorage.getItem("k3")));

/*
localStorage.key()
localStorage.clear()
localStorage.length
*/
