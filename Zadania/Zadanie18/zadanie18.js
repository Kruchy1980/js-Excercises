// Firstly as always the variables
//  Array with 2 defined values
const myAnswer = ['WALCZ !', 'Przemyśl to jeszcze raz Chłopie ...'];
// Texxt input
const advice = document.querySelector('#advice');
//div where the answer will be displayed
const answer = document.querySelector('.answer');
// add button
const addBtn = document.querySelector('.add');
// re-set button
const resetBtn = document.querySelector('re-set');
// show advise button
const showAdvBtn = document.querySelector('.show-adv');
// show possibility button
const showPossBtn = document.querySelector('.show-possib');

// Functions:
//1. display advice
const showAdvice = () => {
    // check if it works
    console.log('click show Advice works!');
    // create function which will choose randomly answer from array
    const choose = Math.round(Math.random() * (myAnswer.length - 1));
    // check if it works
    console.log(choose); // if it works
    // so now we can display the answer - first color - answer = green
    answer.style.color = '#8bd819';
    answer.textContent = `Rada dla Ciebie to: ${myAnswer[choose]}.`;

}
//2. Show Possibilities
const showPossibility = () => {
    // check if good button is connected
    console.log('click show possibilities works!');
    // now we need to display full array in here
    //answer bcause that is our div where every things will be displayed/ will be good to do it in a loop
    // first define the fixed answer.
    answer.textContent = 'Your possibilities are: ';
    for (let i = 0; i < myAnswer.length; i++) {
        // color change for displayed message
        answer.style.color = '#000';
        // text align should be change to left it will looks better
        answer.style.textAlign = 'left';
        // and some left padding add to it
        answer.style.paddingLeft = '30px';
        answer.innerText += `\n ${i + 1}. ${myAnswer[i]}`;
    }
}
// 4. Add advice function 
const addAdvice = () => {
    // first check if correct button is connected
    console.log('click for add works fine!');
    // check if advice.value is correctly recognized
    console.log(advice.value);
    // to be more elatic lets create a variable for input.value
    const addedItem = advice.value;
    // check if it was added correctly
    console.log(addedItem)
    // now we need add anything we enter to our array
    myAnswer.push(advice.value);
    // and now information for user that he did what he did
    // color change for displayed message
    answer.style.color = '#d87f19';
    // and some left padding add to it
    answer.style.paddingLeft = '30px';
    // now the message which should be displayed to user
    answer.innerText = `You have added ${addedItem} to your Array of possibilities.`
}

// EventListeners:

// 1.main event listener - for Daj radę button - will call the showAdvice function - finished
showAdvBtn.addEventListener('click', showAdvice);

// 2. Show possibilities button
showPossBtn.addEventListener('click', showPossibility)

// 3. Add advice button
addBtn.addEventListener('click', addAdvice)

// 4. Reset Advice Array/ Possibilities
resetBtn.addEventListener('click', clearArray);
