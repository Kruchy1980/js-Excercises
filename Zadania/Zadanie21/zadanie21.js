// first variables
// text-box
const textBox = document.querySelector('.text');
// text for the beginning
const txt = 'Cupidatat excepteur do veniam quis duis consequat.'

//now creating function setInterval and thanks to it it will genetate the letters with the time set by us
//the set interval has its own index/id which we cn call to breake the interval
// Some excercises:

// //1. how to call it back
// let number = 0;
// const addLetter = () => {
//     console.log('ok')
//     number++;
//     if (number === 300) clearInterval(indexTyping); //the clearInterval calls it bac but as we can see the index/name of intterval should be inserted as well
// }
// const indexTyping = setInterval(addLetter, 50);

//2. How to add a letter to our text box from declared text

// first variable of index of string letter
let indexText = 0;
//we can add the variable of time in here as well to better ordering the interval time
const intervalTime = 10;
// now we can declare our funcion
const addLetter = () => {
    // choose the element into which we want to add the text
    textBox.textContent += txt[indexText];
    // now increasing the index of string
    indexText++;
    //and now we can disable the iinterval
    if (indexText === txt.length) clearInterval(indexTyping);
}

// here we can declare our setInterval function
const indexTyping = setInterval(addLetter, intervalTime);