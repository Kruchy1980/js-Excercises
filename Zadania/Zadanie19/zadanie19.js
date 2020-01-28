// Firstly variables
// Draw Button
const drawBtn = document.querySelector('.draw');
// input min 
let from = document.querySelector('#min');
// input max
let to = document.querySelector('#max');
//result for didplaying
const result = document.querySelector('.result');

// Drawing function in here
const drawNumber = (e) => {
    // for check if the button is connected correctly
    console.log(e.target);
    //or
    console.log('drawBtn is clicked');
    // time to add logic to function
    // first create a vaule of inmputs
    // from number
    let min = from.value;
    // to number
    let max = to.value;
    // checking if it is working
    console.log(min, max);
    // now the main logic of drawing anumber from the chosen number range with 4 digits after dot
    let score = (Math.random(min) * max).toFixed(4);
    // Another posssibility is to use 
    // Math.random() * (max - min) + min;
    // checking if it is correct
    console.log(score);
    // now just display result to the user
    result.innerText = `The drawed number is:\n ${score}`;


}


// Event listenet for button

drawBtn.addEventListener('click', drawNumber);