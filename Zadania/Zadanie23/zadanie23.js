// first variables
// text-box
const textBox = document.querySelector('.text');
// Array with text variables
// Separate texts variables
const text1 = 'DZIEŃ DOBRY!';
const text2 = 'ZACZYNAMY ...';
const text3 = 'OPOWIEDZ MI COŚ O TWOIM DZISIEJSZYM DNIU ??';
const text4 = 'ŻEGNAM :) ';
const textArray = [text1, text2, text3, text4];

// cursor variable
const cursorMark = document.querySelector('.cursor');
// first variable of index of string letter
let indexText = 0;
// Typing Inde Text
let indexLetter = -10;
//we can add the variable of time in here as well to better ordering the interval time

// cursor blinking time
const cursorBlinkingTime = 150;
//Time variable for setTimeout
const delayTime = 2000;
//Functions
//1.Typing functions
// delaying the typing function we should make  as set timeout inside the function
const addLetter = () => {
    // Delay of starting function
    if (indexLetter >= 0) {
        // First take the word to the textBox
        textBox.textContent += textArray[indexText][indexLetter];
    }
    // And increment the letter strings
    indexLetter++;
    //when to stop the function
    if (indexLetter === textArray[indexText].length) {
        indexText++;
        if (indexText == textArray.length) {
            textBox.textContent = 'Koniec!';
            return
        }
        return setTimeout(() => {
            indexLetter = 0;
            textBox.textContent = '';
            addLetter();
        }, 6000)
    }
    // here we can set timeout for delay of add letter function
    setTimeout(addLetter, 100);

}


addLetter();


//2. Cursor blinking function classList.toggle(class)
const cursorAnimation = () => {
    cursorMark.classList.toggle('active');
}

// Intervals
// 1. Blinking interval
setInterval(cursorAnimation, cursorBlinkingTime);