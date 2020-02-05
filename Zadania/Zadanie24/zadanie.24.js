// Slider .js
// Firt variables as usually
// Our images will be in an array so first variable of slides array with objects wher each of the objects will have the path to the image and both texts inside
const slideList = [{
    img: './slider-images/slider-image-1.jpeg',
    title: 'Projekt 1',
    shortDescription: 'Któtki opis projektu 1 jakim by on nie był:)',
},
{
    img: './slider-images/slider-image-2.jpeg',
    title: 'Projekt 2',
    shortDescription: 'Któtki opis projektu 2 jakim by on nie był:)',
},
{
    img: './slider-images/slider-image-3.jpeg',
    title: 'Projekt 3',
    shortDescription: 'Któtki opis projektu 3 jakim by on nie był:)',
},
{
    img: './slider-images/slider-image-4.jpeg',
    title: 'Projekt 4',
    shortDescription: 'Któtki opis projektu 4 jakim by on nie był:)',
},
{
    img: './slider-images/slider-image-5.jpeg',
    title: 'Projekt 5',
    shortDescription: 'Któtki opis projektu 5 jakim by on nie był:)',
},];

// Now we can set time needed to slide automatic cahcange
const slideTime = 5000;
// Object index
let activeSlide = 0; // we already have information about the image in our html
// Time for changeble items to declare in variables
// image
const singleImage = document.querySelector('img.slider');
// Title
const projectTitle = document.querySelector('.slide-title ');
// Short description
const projectDescriptionShort = document.querySelector('.slide-description ');
// Indicators variable - collecting to array /nodeList of singular elements/indicators and we need to exchange it for casual array because the check method we want to use is not availible for nodeList so we need to use the square brqackets and spread operator to do that
const indicator = document.querySelectorAll('.indicators-dots span');
// Functions:
// 1a.Function which chqanges classes on the indicarors
const changeIndicator = () => {
    // just for check
    console.log('zmiana');
    // first we can check which indicator has the active class
}
// 1. Function which will change the slides
const slideChange = () => {
    //just because we have already the first element with index 0 displayed than we can start the function from incrementing index
    activeSlide++;
    // Now we can call the values of objects like that
    // image
    singleImage.src = slideList[activeSlide].img;
    //title
    projectTitle.innerHTML = slideList[activeSlide].title;
    // Short description
    projectDescriptionShort.innerHTML = slideList[activeSlide].shortDescription;
    // now we need to define statement when the slider should begin from the begining, but because we firstly incrementing index we need to start from the index -1 because we firstly incrementing it to '0'.
    if (activeSlide >= slideList.length - 1) activeSlide = -1;
    // here we can implement the funcion which change the indicator
    changeIndicator();
}
// Set intervas can be implemented here
setInterval(slideChange, slideTime);


// Now implementation