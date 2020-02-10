//STOPER
//Firstly variables
//1. we can set the time which will be displayed now - initial value for 0
let time = 0;
//2. Display place - stoper
const stoperDisplay = document.querySelector('.stoper');
//3. Start/Stop button
const startPauseButton = document.querySelector('.start');
//4. ResetButton button
const resetButton = document.querySelector('.reset');
//5. Set interval ID function with no value which wi will later give to our setInterval funcrtion
let intervalId;

// now we can display the updated time so prepate the function
// Functions:
//1. update time
const timeUpdater = () => {
    // we can now update the stoper whenever function will be called
    time++;
    // check if it is working
    // console.log(currentTime / 100);
    // displaying the time in seonds and hundredths
    stoperDisplay.textContent = (time / 100).toFixed(2);
}

//2. Start/Pause function
const start = () => {
    // we need to create  the if statement because we will have two conditions in here
    // startPauseButton.textContent = 'Pause'; // so if it works we can create the second state but firstly we nee to create if statement to not complicate the button actions so the Stqrt function is connected with Start button textContent. so we can creata the first stateament as below
    if (startPauseButton.textContent == 'Start') {
        // we can strt the interval with it's id earlier declared
        intervalId = setInterval(timeUpdater, 1);
        // Than we can insert our above actions in here
        // we check it works but still we need to change the text content of button so
        startPauseButton.textContent = 'Pause';
    } else {
        // and than we need to  chabge the text content and clear interval - so lets name the interval first and clear it
        clearInterval(intervalId);
        // and change the textContent of button
        startPauseButton.textContent = 'Start';
    }
}

const reset = () => {
    stoperDisplay.textContent = '---';
    clearInterval(intervalId);
    time = 0;
    startPauseButton.textContent = 'Start';
}

//Now we can add event Listeners for buttons
//1. Start button
startPauseButton.addEventListener('click', start);

//2. ResetButton
resetButton.addEventListener('click', reset);