// Firstly as usual declare variables
//for password input
const input = document.getElementById('pass');
// for message display
const div = document.querySelector('.message');
// Our passwords in array is enough for that excercise
const passwords = ["jedEN", 'Dwa'];
// Messages to display in array as well is enough because now we can have nice dependence between passwords and messages and their indexes.
const messages = ['super ! ', 'działa ! ']

const showMessage = (e) => {
    div.innerText = 'The password does not match \n to any of the message';
    div.style.color = '#ff0000';
    div.style.fontSize = '30px';
    div.style.fontWeigth = 'bold';
    // just for check 
    console.log(e.target.value);
    // Creating variable for better check and changing it to one size letters
    const pass = (e.target.value);

    passwords.forEach((password, index) => {
        // Password separately needs to be convert to the same size letters and than we can check equality with input
        if (password.toLowerCase() === pass.toLowerCase()) {
            // if condition is true than display that message and color it to black - else do what is initial state
            div.innerText = messages[index] + ' Wygrałeś';
            div.style.color = '#000';
        }
    })
}

// calling function on input enter
input.addEventListener('input', showMessage);
