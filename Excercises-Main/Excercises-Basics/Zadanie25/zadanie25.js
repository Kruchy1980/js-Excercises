// Counter without closures
// variables
// counter of click - initial state
let counter = 0;
//creating element for our counter display
const div = document.createElement('div');
// We can add to class to the element but for that excercise is no need for that but i we will hve larger project we could use it to make the element more specific and create the block varible inside function:)
div.classList.add('counter');
// i dodajemy do naszego html'a
document.body.appendChild(div);


// Functions
// 1. clickingCounter
const clickingCounter = (e) => {
    // i we would like to create the counter more closed we can declare the counter variable inside the function blocks so the other programmes wont have any acces to that variable
    // let counter = 0; // it wont work because we will reset counter every click - to avoid that we can use closures - excercise 26
    // First what we want the function to do is incrementint our counter
    counter++;
    // The second thing is to display the counter on our HTML in specific place so we need to create the space
    //and now we can add the text to our new element
    div.innerText = `Ilość kliknięć: \n ${counter}`;
    // We can add some styles gthere as well
    div.style.cssText = 'position:absolute; top:25%; left:50%; transform: translate(-50%,-50%);font-size: 3em; font-weight:bold; background-color: #aaa; color: #ff0000; border: 1px solid #000; border-radius:20px; padding: 20px; text-align: center; min-width: 350px;';
}

//Event listener
// Adding EL for our main element - dovcument which will add the clicks quantity when we click on browser screen
document.addEventListener('click', clickingCounter);