// Firstly as usual declare variables
// for the area which will change color  - div main is in this example
const main = document.querySelector('.main');
// Second will be output so element in which i want to display position of cursor after click
const output = document.querySelector('.output');
// Header will change as well when we will move the coursor and i want to display there position of coursor dinamically changed - it will be easier to chose adequote color:)
const title = document.querySelector('h1');
// Now we can declare the event of clicking in the area below title
// Now we will create event listener for mouse move for moving it under title it means div.main
// console.log(main);


document.body.addEventListener('click', (e) => {
    // it will be easier if we define colors as variable with empty value
    let colors = '';
    // That variable is foc color name displayed
    let colores = '';
    // const colors = [red = '#ff0000', green = '#00ff00', blue = ' #0000ff']
    // console logd are just for checks
    console.log(main, e.target);
    console.log(e.clientX, e.clientY);
    console.log(output);

    // Now we declare logic of what will happen with background color dependend of cursor position we click the mouse button

    if (e.clientX % 2 === 0 && e.clientY % 2 === 0) {
        // just because i want to  have name of color displayed and in hexgonaly code color get from colors i need to do one more variables here and above
        colors = '#ff0000';
        colores = 'Red';
    } else if (e.clientX % 2 === 1 && e.clientX % 2 === 1) {
        colors = '#0000ff';
        colores = 'Blue';
    } else {
        colors = '#00ff00';
        colores = 'Green';
    }
    // Here we are declaring what will display as a text/information when we click on body
    output.innerText = `The color should be \n ${colores}`;
    output.classList.add('pos');
    // Now we can do the same for main box  of our page
    main.style.backgroundColor = `${colors}`;


})

document.body.addEventListener('mousemove', (e) => {
    console.log(e.target);
    title.innerText = `Present position of cursor: \n x: ${e.clientX} \n y: ${e.clientY}`;
})
