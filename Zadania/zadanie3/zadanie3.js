// first create element
const box = document.createElement("div");
//add element in document
document.body.appendChild(box);
//create flag
let grow = true;

// add another variable which  will be changed on scroll and because it is a square the only one attribute can be added - just declare variable which will be changed later
let size = 100;
// add some styles to box in javascriopt which will be changed
// box.style.width = size + "px";
// box.style.height = size + "px";
// window.innerHeight; it will show us  height of our box
// maximum height of box we can declare like this
//that style we can add  later

// window.innerWidth * 0.6;

//on scrolling window event
window.addEventListener("scroll", function() {
  //first condition instruction responsible for changing sizes
  // block the max size of box - half size of window
  if (grow) {
    // every scrolling changes the box size definition
    size += 5;
    box.style.width = size + "px";
    box.style.height = size + "px";
  } else {
    size -= 5;
    box.style.width = size + "px";
    box.style.height = size + "px";
  }
  // second conditional instruction responsible for stop growing and start decreasing
  if (size >= window.innerWidth / 2) {
    grow = !grow;
  } else if (size == 0) {
    grow = !grow; // becouse now it has alredy chnged value
  }
});

// //Zadnie samuraj
// const squere = document.createElement("div");
// document.body.appendChild(squere);

// let grow = true; //flaga

// let size = 100; //wielkość kwadratu
// squere.style.width = size + "px";
// // 100 + "px" -> "100" + "px" -> "100px"
// squere.style.height = size + "px";

// //maksymlana wielkość kwadratu
// //window.innerWidth * 0.5

// window.addEventListener("scroll", function() {
//   // size = size + 10;

//   if (size >= window.innerWidth / 2) {
//     grow = !grow;
//   } else if (size <= 0) {
//     grow = !grow;
//   }

//   if (grow) {
//     size += 5;
//     squere.style.width = size + "px";
//     squere.style.height = size + "px";
//   } else {
//     size -= 5;
//     squere.style.width = size + "px";
//     squere.style.height = size + "px";
//   }
// });
