// As usual firstly variables for interesting us elements
// first empty array
const names = [];
// now button - which will add the namew to array

const addBtn = document.querySelector('.accept');

// Our output when later we would like to display the array of names
const output = document.querySelector('.output');

// Now we can declare function which will be called for button click witj event 'e' because we do not want to have the page refreshed after click so we need to use the e.preventDefault() function which prevents to execute the defined action;
const addName = (e) => {
    // preventing of action execution 
    e.preventDefault();
    // aquisition/przejęcie of input value
    const entry = document.querySelector('#entry');
    // variable for entry value
    const name = entry.value;
    // check if the value is correctly downloaded
    console.log(name);
    // adding yo array
    names.push(name);
    // check if the name is correctlu added to our array
    console.log(names);
    // display array in our div and all the names will be displayed from uppercase

    output.textContent += `${name[0].toUpperCase() + name.slice(1).toLowerCase()}, `;
    // after add the input value we can clear the input place
    entry.value = '';
}

// now we can addEvent listener to button that will execute the function add name
addBtn.addEventListener('click', addName);