/// firstly make variables of button and display div as div
// for button
const choosebutton = document.querySelector('button');
// for div
const box = document.querySelector('div');
// Nsmr array needed to draw them and display only one
const names = ['Ola', 'Tola', 'Józek', 'Antoni', 'Helga', 'Kornelka', 'Jacek', 'Placek', 'There is no name for you child'];

// here is extend of solution with the text displayed possibilities
const prefixes = ['Wydaje mi się, że ', 'Mam wrażenie, że ', 'Moim zdaniem ', 'Uważam,że '];

// now we can declare function in arrow way if we want.
const generateName = (e) => {
    //For this excercise we can use one of Math methodes as random and round because random is drawing the numbers from set 0-0,99999... with large decimals and we want to draw intigers only so we will use the methode round as well ro round the choosen number
    // Beide we need to multiply the rounded number by our array length - 1 bedause we will choose the names by indexes

    // 1st Soultion when we know how long is the array

    // // Firstly we can lo the method which draws number from 0-8 because our array has 8 indexes
    // console.log(Math.round(Math.random() * 8) + ' method');
    // // Now we can declare variable which will draw the number as our array index eg.big
    // let indexName = Math.round(Math.random() * 8);
    // // Now we can check if it works
    // console.log(indexName + ' variable');
    // // now we should simply draw the name by using our variable - first check in console if it works
    // console.log(names[indexName]);
    // // now we can use our variable div to display our drawing name
    // box.textContent = names[indexName];

    // // 2nd Soultion when we do not know how long is the array
    // // let use variable whih shows us the length of our array and let's log it out
    // console.log(names.length);
    // // now we know that it is working but we need not full length of array just decremented by one so log it out
    // console.log(names.length - 1);
    // // Now we know it is correct answer and we can use it in our methode instead of intiger - let's log it out
    // console.log(Math.round(Math.random() * (names.length - 1)));
    // // now we can use that methode and declare variable as before
    // let indexOfName = Math.round(Math.random() * (names.length - 1))
    // // let's check if it works
    // console.log(indexOfName);
    // // And now there is nothimg else left to do except of useit to display the result -  ofcourse there is couple steps left we could do but there is no sense to do it
    // box.textContent =  names[indexOfName];

    // // 3rd Soultion when we do not know how long is the array and do not want to use the decremention of array, and would like to extend the displayed text with some prefixes :) than we can use the Math Methode - Math.floor() instead of Math.round() as below
    let indexOfName = Math.floor(Math.random() * (names.length)); // That is also correct answer:)m which we can put to our box:)
    // Now is good ro create variable for prefixes
    let indexOfPrefix = Math.round(Math.random() * prefixes.length - 1);
    // So now is time to display the full name at present
    box.innerText = `${prefixes[indexOfPrefix]}  najlepsze jest imię: \n ${names[indexOfName]}`
}

// now set the listening for button with name of function which will be declared later.

choosebutton.addEventListener('click', generateName);

// now we can declare function in arrow way if we want

