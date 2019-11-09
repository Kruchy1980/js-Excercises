// Get element of button
const addButton = document.querySelector("#dodaj");
// Get list
const listBox = document.querySelector("#lista");

// Counter varible to add to elements - global should be
let x = 1;

// Add Event listener  to button
addButton.addEventListener("click", () => {
  //create block variables
  // for creating element
  const listElement = document.createElement("li");
  // add element to list
  listBox.appendChild(listElement);
  //  list counter needed
  listElement.textContent = x;

  //condition when the class should be dded to element
  if (x % 3 == 0) {
    listElement.classList.add("big");
  }
  //elemeny incrementation by 2
  x += 2;
});
