//---------------------------------------
// To check whether the page is ready to interact.
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState Completed");
    initApp();
  }
});
//---------------------------------------

// Like a main Function.
const initApp = () => {
  const view1 = document.querySelector("#view1");
  const view2 = document.querySelector("#view2");
  const div = view2.querySelector("div");
  const h2 = div.querySelector("h2");

  console.log(view2);

  // Add Event Listener
  // Click Evenet s
  const doSomething = () => {
    alert("Click Event");
    h2.removeEventListener("click", doSomething, false); // Removing a event
    view2.style.display = "none";
    view1.style.display = "flex";
  };

  h2.addEventListener("click", doSomething, false);

  // Add Event Listener using Anonmyous Function

  const divs = view1.querySelectorAll("div");

  //Using Anonymous Function and some demonstration about target varaible
  divs[0].addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Changing the text content and traditional Function
  divs[1].addEventListener("click", function (event) {
    console.log(event.target);
    event.target.textContent = "Clicked";
  });

  // Event Bubbling
  // Without propagation and useCapture false
  const divs2H2 = divs[2].querySelector("h2");

  view1.addEventListener("click", (event) => {
    view1.style.backgroundColor = "#9B6A6C";
  });

  divs[2].addEventListener("click", (event) => {
    divs[2].style.backgroundColor = "#B09398";
  });

  divs2H2.addEventListener("click", (event) => {
    divs2H2.textContent = "Clicked";
  });

  // With propagation(stops the bubbling) and useCapture false
  const divs3H2 = divs[3].querySelector("h2");

  divs[3].addEventListener("click", (event) => {
    divs[3].style.backgroundColor = "#B09398";
  });

  divs3H2.addEventListener("click", (event) => {
    event.stopPropagation();
    divs3H2.textContent = "Clicked";
  });

  // With propagation and useCapture true
  const divs4H2 = divs[4].querySelector("h2");

  divs[4].addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      divs[4].style.backgroundColor = "#B09398";
    },
    true
  );

  divs4H2.addEventListener(
    "click",
    (event) => {
      event.stopPropagation();
      divs4H2.textContent = "Clicked";
    },
    true
  );

  // Only using event.target to modifi content without propagation
  /*  Here Bubbling occurs but little different, Since parents are using event.target to modify attributes, Here the target is event which is triggered by clicking so modification occurs only to the target but the target will be affected by the parents attribute to  */

  const divs5H2 = divs[5].querySelector("h2");

  divs[5].addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "#B09398";
  });

  divs5H2.addEventListener("click", (event) => {
    event.target.textContent = "Clicked";
  });

  // Adding  CSS Class to the element: add, remove, toggle (Author told to check SCSS Also)
  divs[6].addEventListener("click", (event) => {
    divs[6].classList.add("darkblue");
    divs[6].classList.remove("black");
  });

  divs[7].addEventListener("click", (event) => {
    divs[7].classList.toggle("darkblue");
    divs[7].classList.toggle("black");
  });

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("h100");
  });

  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("h100");
  });
};
