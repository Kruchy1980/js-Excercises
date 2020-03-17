// Timer
const timer = () => {
    // First create element when we will display counter
    const div = document.createElement('div');
    // Now we can add the element inside the web content
    document.body.appendChild(div);
    // we can add some styles here as well
    div.style.cssText = 'text-align: center; font-size: 2em; border: 1px solid #000; border-radius: 20px; background-color: #070707; color: #fff; margin-top: 20px;';
    // declare variable - initial state of timer
    let counter = 0;

    // Now we can start to write function responsibbe for timer

    // Now functionwhich will create anything we want in the html code
    const check = () => {
            // counter++; // we want to count from 0 not one so we are incrementing counter not earlier than when display
            div.innerText = `The time you have spend in the internet is equal to: ${counter++} seconds.`
        }
        // we need to return the inside function
    return check
}

// Now we can create the interval and function we want to call
//1. crate variable with calling function
const timeSpend = timer()
    //2. Interval - setting the interval for calling function
setInterval(timeSpend, 1000);