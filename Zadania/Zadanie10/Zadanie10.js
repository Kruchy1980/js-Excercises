// first declaring variables
// our box let's name it just div
const div = document.querySelector('div.box');
// starting position of box
let divX = 50; // left
let divY = 120; // top
// here declarung what position should it be 
div.style.left = divX + "px"; // from left
div.style.top = `${divY}px`; // from right
// drawActive means if you click on the element to keep i and gives you possibioity to drag it
let drawActive = false;
//Declarinng variables of inserting Div
let insertDivX; //left/right
let insertDivY; // top/bottom

// first Event Listener what to do if mouse is clicked - left button clicked and holded

div.addEventListener('mousedown', (e) => {
    // if we click the background color to see that it is clicked
    div.style.backgroundColor = "#999";
    // declare if we drawing it or not by using logical negation
    drawActive = !drawActive;
    // drawActive = true;
    // create variable of offsetsX which shows us how far from the edge we clilcked - thanks to thar piece of code we can see the position depended of our box dimentions - it helps us to show where should we draw the square again
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);

})

// first Event Listener what to do if mouse is moved - left 

div.addEventListener('mousemove', (e) => {
    // of we keep the mouse button down
    if (drawActive) {

        // we need to decrease the client x value of the offset because we want to draw the box in the same place it was when we clicked and than drag it
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        // And now we are drawing the box in position corrected by offset click:)
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})


//When the button of mouse is released tahn what to do

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "#000";
    // just because we reverse the draging element it is enough that we will change the value from the last changing
    drawActive = !drawActive;
    // drawActive = false;
})