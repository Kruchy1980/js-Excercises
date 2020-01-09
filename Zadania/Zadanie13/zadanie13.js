// Firstly as usual declare variables
//for password input
const input = document.getElementById('pass');
// for message display
const div = document.querySelector('.message');
// Our passwords in array is enough for that excercise
const passwords = ["user", 'autumn'];
// Messages to display in array as well is enough because now we can have nice dependence between passwords and messages and their indexes.
const messages = ["wyjechałam na zawsze", 'Zajefajna pora roku']

//add Event listener for input
input.addEventListener('input', (e) => {
    // here we need to set the initial state of box
    div.innerText = 'Wrong Password \n Try again';
    div.style.color = '#ff0000';
    div.style.fontSize = '30px';
    div.style.fontWeigth = 'bold';
    // but than we need to move the other color of text ot adequote place not here
    // div.style.color = '#000';
    // console.log(e.target.value);

    // first solution if function

    // if (e.target.value === 'user') {
    //     div.innerHTML = messages[0];
    // } else if (e.target.value === 'autumn') {
    //     div.innerHTML = messages[1];
    // } else {
    //     div.innerText = 'Wrong Password \n Try again';
    //     div.style.color = '#ff0000';
    //     div.style.fontSize = '30px';
    //     div.style.fontWeigth = 'bold';
    // }

    // Second solution  with forEach methode and ternary function

    // first is good to create variavle eg text with our e.target value

    let text = e.target.value;
    // now checking all elements of passwords if are equal to password entered to input  it means to our text

    passwords.forEach((password, index) => {
        if (password === text) {
            // Now all the actions if it is true
            div.innerHTML = messages[index];
            div.style.color = '#000';
        } // in forEach user wont work because the function will execute s many times as elements in array are som after next loop password wont match so if we want to get message if the password is not correct we need to declare it before the loop - not here
        // div.innerText = 'Wrong Password \n Try again';
        // div.style.color = '#ff0000';
        // div.style.fontSize = '30px';
        // div.style.fontWeigth = 'bold';
    })
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})


