// Firstly as usual declare variables
//for password input
const input = document.getElementById('pass');
// for message display
const div = document.querySelector('.message');
// Our passwords in array is enough for that excercise
const passwords = ["jedEN", 'Dwa'];
// Messages to display in array as well is enough because now we can have nice dependence between passwords and messages and their indexes.
const messages = ['super ! ', 'działa ! ']
// solution third - with map
//     first change the size of passwords  to lowerCAses - but needs to be declared out of the function showMessage
const lCPass = passwords.map(el => el.toLowerCase());


const showMessage = (e) => {
    div.innerText = 'The password does not match \n to any of the message';
    div.style.color = '#ff0000';
    div.style.fontSize = '30px';
    div.style.fontWeigth = 'bold';
    // just for check 
    console.log(e.target.value);
    // Creating variable for better check and changing it to one size letters
    const pass = (e.target.value).toLowerCase();

    // solution first

    // passwords.forEach((password, index) => {
    //     // Password separately needs to be convert to the same size letters and than we can check equality with input
    //     if (password.toLowerCase() === pass.toLowerCase()) {
    //         // if condition is true than display that message and color it to black - else do what is initial state
    //         div.innerText = messages[index] + ' Wygrałeś';
    //         div.style.color = '#000';
    //     }
    // })

    // Solution second  - firstly change the array of passwords to lower elements 
    // passwords.forEach((password, i) => {
    //     passwords[i] = password.toLowerCase();
    //     console.log(passwords[i]);

    // })

    // passwords.forEach((password, index) => {
    //     // Password separately needs to be convert to the same size letters and than we can check equality with input
    //     if (password === pass) {
    //         // if condition is true than display that message and color it to black - else do what is initial state
    //         div.innerText = messages[index] + ' Wygrałeś';
    //         div.style.color = '#000';
    //     }
    // })

    // solution third - with map
    // first change the size of passwords  to lowerCAses - but needs to be declared out of the function showMessage
    // const lCPass = passwords.map(el => el.toLowerCase());

    //Now we can easily to use for loop to get to the elements of array and than to compare it with input value after what we czn display adequate information in browser
    for (let index = 0; index < lCPass.length; index++) {
        if (pass === lCPass[index]) {
            div.innerText = messages[index] + ' Wygrałeś';
            div.style.color = '#000';
        }
    }
}


// calling function on input enter
input.addEventListener('input', showMessage);
