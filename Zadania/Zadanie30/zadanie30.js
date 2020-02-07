// Time down counter
// Variables for display
const timer = document.querySelector('.count-down-timer');
// w do not need it at all it is enough just one span for display the counter
// 1.Days
// const daysD = document.querySelector('.d');
// // 2. Hours
// const hoursD = document.querySelector('.h');
// // 3. Minutes
// const minutesD = document.querySelector('.m');
// // 4. Seconds
// const secondsD = document.querySelector('.s');
//Object/s
// Date Objects
// // 1.Present time shows us present time
// const presentTime = new Date().getTime(); // shows us miliseconds which left from 01.01.1970 - whet the servers time was set
// 2. Time  to the event - first create object which the event starts
const finishTime = new Date('2020-06-23 13:00:15').getTime(); // so now we hae two times present and futuse so by calculating the difference beetween the times we will get the score how many miliseconds left so the largest philosofy is to calculate the seconds for  our varisbles - days, hours, minutes and seconds
// Now we can create the variable which will be the score of difference beetween our present and event time
// const countDownTime = finishTime - presentTime;
//------------------------------------------------
// Function/s
const countDown = () => {
    // 1.Present time shows us present time
    const presentTime = new Date().getTime(); // shows us miliseconds which left from 01.01.1970 - whet the servers time was set
    const countDownTime = finishTime - presentTime;
    // The only variables we need here is that what will change so present Time and the difference
    // So no we can calculate the times separately with knowledhe of that 1 second = 1000 miliseconds, 1 minute = 60s = 60000ms; 1 hour = 60m = 36000000; 1day = (+-)24h = 1440m = 86400s = 86400000ms;
    // checks if it is changing
    // console.log(countDownTime);
    // Now we will calculate that:) 
    // Firrstly calculate the seconds from our difference
    //seconds
    const seconds = Math.round(countDownTime / 1000);
    // checks if it is changing
    console.log(seconds);
    // minutes
    const minutes = Math.round(countDownTime / (1000 * 60));
    // console.log(minutes)
    //hours
    const hours = Math.round(countDownTime / (1000 * 60 * 60));
    // console.log(hours)
    //days
    const days = Math.round(countDownTime / (1000 * 60 * 60 * 24));
    console.log(days)
        //     // now we can set the values to our adequote places -  need all of that stuff
        //     //Days
        // daysD.innerHTML = days;
        // //hours
        // hoursD.innerHTML = hours;
        // //minutes
        // minutesD.innerHTML = minutes;
        // //seconds
        // secondsD.innerHTML = seconds;
        // But if we would like to display it in one line we can do it only in one span - so we need to change the HTML code a little and some variables in js and add one variable for clock
    timer.innerHTML = `${days}D : ${hours}h : ${minutes}m : ${seconds}s `
}


// Event/s / Iterval/s - we can call the function now
setInterval(countDown, 1000);