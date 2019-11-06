// Get element from HTML
const btn = document.querySelector("button");

// Function for creating the boxes by anonymus function
// btn.addEventListener("click", function() {
//   console.log("Click");
// });
//Not anonymus function
// Firstly we have to creatte the Event Listener on click
// btn.addEventListener("click", addElement); // Here we have just put the name of later declared function

// We have to declare the funcrtion of increment elements but later only we can call the function  so first we need to declare functions later on we can call the function;

// Here we have to put our counter to be updated every time function is executed
let counter = 1; // create the counter variable

let activeNumber = 1; // create variable for xecond solution of creqating circle.

const addElement = () => {
  //   console.log("click");
  // now in the function we will create the element in this function
  //create element
  const div = document.createElement("div"); //create div
  document.body.appendChild(div); //That is the only one possibility to use appendChild to body with not getting the element with querySelector
  // Creating a counter

  div.textContent = counter; // add the number to the element but at present numbet is not updated
  // we have to update counter

  // Now we can create function which is calculating quantity of boxes, and to every fifth element add class .circle

  //   if (counter % 5 == 0) {
  //     div.classList.add("circle");
  //   }

  // second solution for calculation - need to be created new variable
  if (activeNumber == 5) {
    activeNumber = 0;
    div.classList.add("circle");
  }
  counter++; // incrementation
  activeNumber++;
};

btn.addEventListener("click", addElement); // if we will put here () we would execute the function not only call the function
