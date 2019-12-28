// Solution here - Tutaj rozwiązanie

// Frst create vriables - for both solutions
// Our Button Variable
const incbtn = document.querySelector('button');
// Our list elements variable
const listElements = document.querySelectorAll('li');
// Declare initial size of our font as chzngable variable
let fontS = 10;

// Add EventListener to button
// incbtn.addEventListener('click', () => {
//     // firstly change the text in button
//     incbtn.innerHTML = '<strong>Increase Size!!</strong>'
//     // Now for each element with for loop excute the Event
//     // first declare initial font size
//     // let size = 10;

//     // First solution with for loop
//     // We need to declare it here to not increment each element of list for every loop execution just for each elements  quantity equal to one for each element.
//     fontS++;
//     // Than start the loop for every element of list
//     for (let i = 0; i <= listElements.length; i++) {
//         // We can also use conditional function to check if display is block to not repeat it every time.

//         // if (listElements[i].style.display === '') {

//         // Or Another solution is
//         if (!listElements[i].style.display) {
//             // first declare visible display of list elements
//             listElements[i].style.display = 'block';
//         }
//         // listElements[i].style.fontSize = fontS + 'px';
//         // Now declare initial value of font size - second solution
//         listElements[i].style.fontSize = `${fontS}px`;

//     }
// })



// Second Solution with forEach methode

incbtn.addEventListener('click', () => {
    // first change button text if clicked
    incbtn.innerText = 'Increase Size!!';
    //Than increase fontS by one
    fontS++;
    // now forEach element of list - anme it element
    listElements.forEach((element) => {
        // if element display is not  block than
        if (!element.style.display) {
            // add display to block
            element.style.display = 'block'
        }
        // than or else just increase the font Size by one.
        element.style.fontSize = fontS + 'px';
    })
})