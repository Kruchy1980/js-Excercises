// First variables
// Create Element belt
const belt = document.createElement('div');
// Add element to  the page
document.body.appendChild(belt);
// Set the height of our body
document.body.style.height = '10000vh';
// Height of belt
let beltHeight = 25;
//Width of belt
let beltWidth = 50;
// Dimensions increasing
let diminc = true;

//Adding scroll event listener to window
window.addEventListener('scroll', function () {
    // Condition what to to if diminc
    if (diminc) {
        beltHeight += 5;
        beltWidth += 10;
        // add some colors
        belt.style.backgroundColor = '#ff0000';
        // And if !diminc
    } else {
        beltHeight -= 5;
        beltWidth -= 10;
        belt.style.backgroundColor = '#0000ff'
    }
    // Now we cn render the element and the conditional insttuction iw executed not rendered
    belt.style.height = beltHeight + 'px';
    belt.style.width = beltWidth + 'px';
    //Now when to know if there is not diminc
    if (beltWidth >= window.innerWidth / 2 || beltHeight >= window.innerHeight / 4) {
        diminc = !diminc;
    } else if (beltWidth === 0 || beltHeight === 0) {
        diminc = !diminc;
    }

})