// Firstly variables/ objects- because the objects won't create conflictws with global variables
// General game data object
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}; // object where later we willstore the values

// Actual game data object
const game = {
    playerHand: '', // what the user choose
    aiHand: '', //what the ai choose
    // playerHandHTML: '', // image border when choosen - not used with separate variable but will leave it as a possibility
}
// get to variable our images
const hands = [...document.querySelectorAll('.image-container img')]; //get the only images from image container separatly each image will be choosen convered to array thanks to squar brackets -  it is no need to get the array but we need to remember that array has more methodes.

// Functions
//handSelection function
const handSelection = (e) => {
    // just for check if it is working target or current Target will be fine
    console.log(e.currentTarget.title); //we can see it works
    // If it is working we can refer to our game object - dataset collects all the information from data attribute/s  when we can choose what exctly we need
    game.playerHand = e.currentTarget.dataset.option;
    // check if it works
    console.log(e.currentTarget.dataset);
    console.log(e.currentTarget.dataset.option);
    console.log(game.playerHand);
    // now we can add  border to our choosen element
    //but b4 we add the style to our elementn we want to chose  we need to clean the shadow from others one with forEachmethode like that
    hands.forEach(element => element.style.boxShadow = '');
    e.currentTarget.style.boxShadow = '0 0 0 4px #659916';
}

// Second - declarative function we can write by using this like below
// function handSelection() {
//     // this is the same effect but i prefer ro use the arrow function
//     console.log(this.title);
// }


// EventListeners
// Now we can add an EventListener for each of the images on click
hands.forEach(img => img.addEventListener('click', handSelection));