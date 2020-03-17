// Clock 
// Variables
// New Object the new means - create the new object and call on it constructor function
const time1 = new Date(); // in the brackets we can but it is not obligatory to insert some arguments needed to create more speific constructor empty brckets will display the data only
//----------------------------------------------
// For example we can use some methodes as:
// For local Time
console.log(time1.toLocaleString()); //Date d/m/y + h/m/s
console.log(time1.toLocaleDateString()); //Date d/m/y 
console.log(time1.toLocaleTimeString()); //Time h/m/s 
// For European standard time intigers + names of day and month
console.log(time1.toString());
console.log(time1.toDateString());
// Including GMT Difference display
console.log(time1.toTimeString());
// Including if Zulu = Loczle time or not and miliseconds as well
console.log(time1.toISOString());
// Universal time
console.log(time1.toUTCString());
// Locale/Zulu Time with miliseconds to json file.
console.log(time1.toJSON());
//-----------------------------------------------
// We can get the seconds using getter as below
const seconds = time1.getSeconds(); // the seconds are taken from the time the object new Date() was created or called and are not updated if it is variable
// We can get the time seconds by updatng them in console so the seconds will be updated every time the script will be called.
console.log(time1.getSeconds()); // so now the const xeconds will be upated by the console.log() caller
// We can easily do the same thing with minutes, hours and date even
// Minutes
const minutes = time1.getMinutes();
// Hours 
const hours = time1.getHours();
// Miliseconds
const miliseconds = time1.getMilliseconds();
//Year not full- strange display, full  =  UTC full
const fullYear = time1.getUTCFullYear();
const year = time1.getYear();
const utcYear = time1.getUTCFullYear();
//month = month utc ==> need to remember that month as only one is calculated from 0 - janyary - 11 = december
const month = time1.getMonth();
const utcMonth = time1.getUTCMonth();
//day = utcDay = shows day of week what it is - 1 = monday, 7 = sunday
const day = time1.getDay();
const utcDay = time1.getUTCDay();
// Date = UTCDate - it shows the day of month
const date = time1.getDate();
const utcDate = time1.getUTCDate();

// used only in Internet Explorer not supported to many oheers - Morqa about it under URL:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Date.getVarDate
// const varDate = time.getVarDate(); // used for function create

//------------------------------------------------
//-----------------------------------------------
// Now The actual excercise - display the actual hour hour
// // time variables:
// let seconds = time.getSeconds();
// // Minutes
// let minutes = time.getMinutes();
// // Hours 
// let hours = time.getHours();
// Variable of needed element where we would like to display the time
const timeDisplay = document.querySelector('.timer');
// now we can add the time to textContent of the element
// timeDisplay.textContent = `${hours} : ${minutes} : ${seconds}`;
// or we can display time which will be updated all the time
const displayTime = () => {
        // time variable
        let time = new Date();
        // // varibles
        // // time variables:
        // let seconds = time.getSeconds();
        // // Minutes
        // let minutes = time.getMinutes();
        // // Hours 
        // let hours = time.getHours();
        // varibles- if we want to have actual time will be displayed always in double numbers than we can ad ternary operatow which can do the acion with every part of digits in clock
        // time variables:
        let seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
        // Minutes
        let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        // Hours 
        let hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        // just for check
        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        timeDisplay.textContent = `${hours} : ${minutes} : ${seconds}`;
    }
    // SetInterval for the function
setInterval(displayTime, 1000);