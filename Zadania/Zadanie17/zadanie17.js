// As usual firstly variables for interesting us elements
// first empty array
const names = [];
// now button - which will add the namew to array

const addBtn = document.querySelector('.accept');
// div warning added to display communicate when is smth wrong with input
const warn = document.querySelector('.warning');
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
    // Here we will check if we hava smth inserted into input and that if in the input name is not repeteable. We need to check it b4 pushing so it is the best plade to insert conditional statementwith condition when the input is emty and we can add when name is already in our array. -  need to remember that first is the thrue condition executed because onother time it won't work.
    if (entry.value.length) {
        // for check if it works
        console.log('It works!'); // iw working
        // now we are generating condition which checks the names in our array and compares with entry value - 'for ...of' loop
        for (el of names) {
            console.log('my name is ' + el);
            //now condition
            if (el === name) {
                // just check if it works
                console.log('It works as well!!!');
                // just information for user
                warn.textContent = 'You have that name in this collection already!';
                warn.style.color = '#000';
                warn.style.fontWeight = 'bold';
                // finishing the whole function
                return;
            }
        }
        warn.textContent = '';
        names.push(name);
        // check if the name is correctlu added to our array
        console.log(names);
        // display array in our div and all the names will be displayed from uppercase

        output.textContent += `${name[0].toUpperCase() + name.slice(1).toLowerCase()}, `;
        // after add the input value we can clear the input place
        entry.value = '';

    } else {
        // some style to display information
        warn.textContent = 'You have to enter name !!!';
        warn.style.color = '#ff0000';
        warn.style.fontSize = '2em';
        // finish execution
    }
}

// now we can addEvent listener to button that will execute the function add name
addBtn.addEventListener('click', addName);
