// DOM - Document Object Model

// Selecting Using getElementId
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

// Changing CSS Property using JS

//view1.style.display = "none";
//view2.style.display = "flex";

// Selecting using class name
const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

//Diff b/w nodes and elements

// Selecting divs

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  //evenDivs[i].style.height = "200px";
  //evenDivs[i].style.width = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Heading Changed";

const navBar = document.querySelector("nav");
console.log(navBar);

navBar.innerHTML = `<h1>innerHTML Used</h1> <p>Paragraph</p>`;

console.log(navBar);

navBar.style.justifyContent = "space-evenly";

// Navigating the DOM TREE

console.log(evenDivs);
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); // 12 Elements
console.log(evenDivs[0].parentElement.childNodes); // But 25 Nodes
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

//

view1.style.display = "none";
view2.style.display = "flex";

view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// Removing nodes (We can use the below function to clear the section or also a whole page )
while (view2.lastChild) {
  view2.lastChild.remove();
}

// Created a new element
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv); // Appending to the parent
};

for (let i = 0; i < 12; i++) {
  createDivs(view2, i + 1);
}
