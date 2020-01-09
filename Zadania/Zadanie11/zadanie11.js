// Fist declare the colors as variable it will br easier to use them later on
let red = 100;
let green = 100;
let blue = 100;
// Declare how the background color of body should change as we remember the colorr will be declarea as rgb color with declared initial values
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// Separatelu we will declare function which will change the color
const changeColor = (e) => {
    // just for check if the event works and is wisible
    console.log(e.keyCode, e.which); // They containes the same information globally viewed
    // 38 - strzałka do góry / up arrow
    // 40 - strzalka w dół / down arrow

    // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
    // Pressing the key up arrow on keyboard  should slowly change the collor to white one, if is pressed down , the background color chould change slowly to black

    // wersja 1 - instrukcja if /  version one with if instruction
    // Simple condition declared
    // if key up
    // if (e.keyCode === 38 && red < 255) {
    //     // for not to come above the 255 value
    //     red += 1;
    //     green += 1;
    //     blue += 1;
    //     // if key down
    // } else if (e.keyCode === 40 && red > 0) {
    //     // for not to come below the 0 value and decremention used
    //     red--;
    //     green--;
    //     blue--;
    // }
    // // for check only
    // console.log(red);
    // // background color declaration
    // document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // wersja 2 - instrukcja switch / werdsion 2 with switch instruction
    // The difference between these two instructions are that in switch we need to set what are we  hecking as switch parametet -  here we are checking the number of key on our keyboard, than on case we are calling that key and executing the action declared under case.big
    switch (e.keyCode) {
        case 38:
            // Here we can use ternary opertor for this declaration to check if the red is not above or below max or min value of colors in rgb
            document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red}, ${green < 255 ? green++ : green}, ${blue < 255 ? blue++ : blue})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red}, ${green > 0 ? green-- : green}, ${blue > 0 ? blue-- : blue})`;
            break;
        default:
            document.body.innerHTML = 'You have pressed wrong key on keyboard';
            document.body.style.color = '#ff0000';
            document.body.style.fontSize = '30px';
            document.body.style.fontWeight = 'bold';
    }
    console.log(red);




}
// on keydown what should happen - the function earlier cdeclared is called.
window.addEventListener('keydown', changeColor)