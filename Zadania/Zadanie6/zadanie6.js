// First create the variables needed for this excercise
// initial size of font 
let size = 10;
// initial number off element counter
let orderElement = 1;


// Function w
const init = () => {
    // first create  button and empty ul
    const but = document.createElement('button');
    // create reset button as well which resets all the list elements
    const butReset = document.createElement('button');
    const list = document.createElement('ul');
    // Eliminate dots from unordered list
    list.style.listStyle = 'none';
    // Than add the text to button/s
    but.innerText = 'Add Elements to list';
    butReset.innerText = 'Wyczyść listę';
    // Add crated elements to document.body
    document.body.appendChild(but);
    document.body.appendChild(butReset);
    document.body.appendChild(list);
    // Set the event listener for button wit executing adequate function 
    but.addEventListener('click', createLiElements);
    // Set Event listener to reset button
    butReset.addEventListener('click', () => {
        // clean the list
        list.innerHTML = '';
        // set size to initial size
        size = 10;
        // set number to initial state/number
        orderElement = 1;
    })
}


const createLiElements = () => {
    // console.log('click'); // just for check if the button is working
    for (let i = 1; i <= 10; i++) {
        // declare list element
        const element = document.createElement('li');
        // add style to lilst elements for each elements increase the font size by 1
        element.style.fontSize = `${size++}px`;
        // add tex to list elements with increment number of each element
        element.innerHTML = `Element nr ${orderElement++}`;
        // console.log(element[i]); // just for check
        // now add new list element to list
        document.querySelector('ul').appendChild(element);
    }
}

// execute the function no 1.
init()

