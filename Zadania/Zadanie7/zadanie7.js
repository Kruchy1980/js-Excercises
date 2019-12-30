// Firstly declare the variabless:
// Output which will display coursor position after mouse move 
const output = document.querySelector('.output');
// H1 text which later will be replaced byoutput
const h1 = document.querySelector('h1');
// Now add  on mousemove EventListener with arrow function contained parameter - need to remember that for first parameter in function js will always teecognize it as an event it does not matter how we name it the most important is that it will be identified as an event.
document.body.addEventListener('mousemove', (e) => {
  //for check the event and event target
  console.log(e.target, e);
  //in consile we can see that the event has paramters:
  //clientX - for horizontqal axis and clientY for vertical axis so we cn check how it looks
  console.log(e.clientX, e.clientY);
  //client is always our webbrowser so it shows us how many pixels from left and top borders of browser is the pointer nd it does not matter if we are of the bottom of the page which extends over 100% , because client is always refers to the top of browser not page but if we would like to see the reference to the top of our page not browser window we need to use pageX and Y let see what is the difference
  console.log(e.pageX, e.pageY); // it will show from the beginning of document not browser window
  // The third possibility of displaying position is to use:
  // screenX and Y which shows the position from the screen parameters not browser
  console.log(e.screenX, e.screenY); // it will show us position according full screen not only browser screen.


  // just for checking it it is working
  console.log(output.innerText = 'i\'m here');
  // hide h1 text, 
  h1.style.display = 'none';

  // h1.textContent = `${e.screenX}, ${e.screenY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;

  // Declare what should be displayed in output we czn use <br> or <div> tag to separate the values into singular lines if we are using inner HTML other solution will be given in next excercise no 8.
  output.innerHTML = `Pointer position is in: <br>
  x:  ${e.clientX} <br>   and <div>
  y:  ${e.clientY}</div>`;
})