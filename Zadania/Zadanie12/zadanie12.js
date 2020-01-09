// Firstly as usual declare variables
//for password input
const input = document.getElementById('pass');
// for message display
const div = document.querySelector('.message');
// Our passwored
const password = "user";
// Message to display
const message = "wyjechałam na zawsze"

//add Event listener for input
input.addEventListener('input', (e) => {
    // just to show in console any key we have entered dynamically changing if we have input as Event it will show any change in the input field.
    console.log(e.target.value);
    // Now conditional function which checks the value of  word entered in input
    if (password === e.target.value) {
        // if the password is correct than message will be displayed
        div.textContent = message;
        // and the input value will be  erased to not showhow many characters is in the password
        e.target.value = '';
        // else
    } else {
        // The comunicate will be shown
        div.textContent = 'You\'ve entered wrong password';
    }
})
// if we switch to the input field than the input will be given the 'active' class with css styles prepared in css file
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
// if  we would  leave the field the class 'active will be removed.
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})