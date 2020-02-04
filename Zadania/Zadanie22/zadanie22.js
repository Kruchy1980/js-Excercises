// first variables
// text-box
const textBox = document.querySelector('.text');
// text for the beginning
const txt = 'Cupidatat excepteur do veniam quis duis consequat.'
// ccursor variable
const cursorMark = document.querySelector('.cursor');
// first variable of index of string letter
let indexText = 0;
//we can add the variable of time in here as well to better ordering the interval time
const intervalTime = 50;
// cursor blinking time
const cursorBlinkingTime = 150;
//Guncrions
//1.Typing functions
const addLetter = () => {
    // choose the element into which we want to add the text
    textBox.textContent += txt[indexText];
    // now increasing the index of string
    indexText++;
    //and now we can disable the iinterval
    if (indexText === txt.length) clearInterval(indexTyping);
}
//2. Cursor blinking function classList.toggle(class)
const cursorAnimation = () => {
    cursorMark.classList.toggle('active');
}

// Intervals
// 1. Typing interval
const indexTyping = setInterval(addLetter, intervalTime);
// 2. Blinking interval
setInterval(cursorAnimation, cursorBlinkingTime);