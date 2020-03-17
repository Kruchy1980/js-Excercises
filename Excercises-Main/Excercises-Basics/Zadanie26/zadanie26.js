// Counter with closure mechanism
//creating element for our counter display
const div = document.createElement('div');
// We can add to class to the element but for that excercise is no need for that but i we will hve larger project we could use it to make the element more specific and create the block varible inside function:)
div.classList.add('counter');
// i dodajemy do naszego html'a
document.body.appendChild(div);

// We can create the second counter display to display two different counters

const div1 = document.createElement('div');
// We can add to class to the element but for that excercise is no need for that but i we will hve larger project we could use it to make the element more specific and create the block varible inside function:)
// div.classList.add('counter'); // we do not need to add the class in here as above also
// i dodajemy do naszego html'a
document.body.appendChild(div1);
// So now when we have the two counterr display element added to HTML we can set both counters to be displayed like below
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// That is only example of closure mechanism skip it
//--------------------------------------------
// example -  of closure mechanism

// function x() {
//     let counter = 0;
//     function y() {
//         console.log(counter);
//     }
//     // 1a. here we call the y function
//     // y();
//     //1b. or we can just return the y function without callback
//     return y;
// }
// //1a. we can call the x function
// // x();
// //1b. Now we can declare the variable where we will define the x function 
// const closureFunction = x();
// // and now we can call the variable where function x is defined
// closureFunction();

// more detailed description of the closure mechanism
// Counter with closure mechanism - the mechqnism helps us to get access to defined value out of function a when the function is not active yet.
//The variable exist in other function even if the function where the variable was created even if the function is not active
// in the program memory the variable exist if the reference from other function leds to the function and we have access to the variable as well as we can redefine the variable.
// Firstly lets create the element we inside which we would like to disply our counter
//----------------------------------------------------

// Now we can declare the counter with closure mechanism.
// firstly we can create addCounter function and wwe can set the defined  value of counter to this function - it is no needed for closure but this is just for showing other way to declare variable
const addCounter = (begin = 0) => {// now we can change the starting point only in this place not wverywhere where is the counter used -  if there is
    // now we can create elements needed in the main function
    let counter = begin;
    // now we need return any function iside which we can do anything with the earlier declared counter
    return () => {
        // we can increase counter - because we can modify the counter or do nything we want with it even if the function is not called in here
        // increase counter
        counter++;
        //and do whatever we want with that number do eg display it in our browser:
        div.innerText = `Ilość kliknięć: \n ${counter}`;
        // And we can add some styles there as well
        div.style.cssText = 'position:absolute; top:25%; left:50%; transform: translate(-50%,-50%);font-size: 3em; font-weight:bold; background-color: #aaa; color: #ff0000; border: 1px solid #000; border-radius:20px; padding: 20px; text-align: center; min-width: 350px;';
    }
}
// this will be the secound counter
const addCounter1 = (begin = 0) => {// now we can change the starting point only in this place not wverywhere where is the counter used -  if there is
    // now we can create elements needed in the main function
    let counter = begin;
    // now we need return any function iside which we can do anything with the earlier declared counter
    return () => {
        // we can increase counter - because we can modify the counter or do nything we want with it even if the function is not called in here
        // increase counter
        counter++;
        //and do whatever we want with that number do eg display it in our browser:
        div1.innerText = `Ilość kliknięć: \n ${counter}`;
        // And we can add some styles there as well
        div1.style.cssText = 'position:absolute; top:50%; left:50%; transform: translate(-50%,-50%);font-size: 3em; font-weight:bold; background-color: #aaa; color: #ff0000; border: 1px solid #000; border-radius:20px; padding: 20px; text-align: center; min-width: 350px;';
    }
}

// Functions
// Now we can use the variable to make access to our main functio addCounter(in here we can insert stqrting point our begin) to set the beginning point of clicker count -->
const clickingCounter = addCounter();
// -->
const clickingCounterFrom4 = addCounter1(4)
//Event listener
// Adding EL for our main element - dovcument which will add the clicks quantity when we click on browser screen
document.addEventListener('click', clickingCounter);
//--> And now we can call it on clicking like that
document.addEventListener('click', clickingCounterFrom4);