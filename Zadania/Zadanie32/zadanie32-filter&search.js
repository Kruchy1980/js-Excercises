// Filtering and Searching tasks
//1. Filtering
//Firstly we can create the array of our tasks where the tsks will be added
//-----------REMINDER----------------

// // the example array for now
// const taskArray = [34, 45, 198, 495, 32, 34, 52, 23, ];
// //1. Filter methode
// // Filter creates  the new array withe filtered elements
// // We want odd number for example
// const oddNumbers = taskArray.filter(el => el % 2);
// // and even numbers
// const evenNumbers = taskArray.filter(el => !(el % 2));
// // numbers bigger than
// const numbersBiggerThan50 = taskArray.filter(el => el > 50);
// //2. Map methode 
// // Map creates the new array as well and execute some action on the new aray
// // a Multiply elements
// const double = taskArray.map(el => el * 2);
// // b create string - add a string to it empty or with value
// const makeString = taskArray.map(el => el + "");
// // or
// const makeStringWithContent = taskArray.map(el => el + " papierosy");

// //3. forEach
// // a Multiply elements
// const multiplyElements = taskArray.forEach((el, index) => taskArray[index] = el * 2);
// // to check what has happened we need to return our prevoious array not the variable declared for method array.forEach()
// console.log(taskArray);

// // Let's make the same effect with forEach loop wich is not creating the new array just modifying/mutating the old one

//--------------END OF REMINDER--------------------
//SEARCH - searcher
// 1. First variables needed to our searcher
//1a. Searcher
const searcher = document.querySelector('#searcher');
//1b. Our list - because we will clear the list during searching
const taskList = document.querySelector('ul');
//1c. Our tasks we can use the class of created item.
const tasksItem = document.getElementsByClassName('task');
//2. Functions
//2a. Search
const searchTask = (e) => {
    // for check if it works
    // console.log(e.target.value); // it works
    // now we know that it is case sensitive so to make it case insensitive we can now converse it to lower or upper case = let's make it to lowerCase
    // console.log(e.target.value.toLowerCase()); //it works so we need only the  content of console log
    const searchText = e.target.value.toLowerCase();
    // console.log(searchText);
    // So now we can exchange our list item Node array for casual array which allows us to use more adequote methodes eg .folter methode to this excercise
    let tasks = [...tasksItem];
    console.log(tasks);
    // Now we can filter the tasks  by our text from input
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    console.log(tasks);
    // // just or check if search works properly
    // // console.log(tasks); //if it works than we can clear our ul
    // //---------------- To fixing ---------------
    taskList.textContent = '';
    // // and now we can add the filtered tasks into our ul
    // tasks.forEach(task => taskList.appendChild(task));
    tasks.map(task => taskList.appendChild(task));

    taskList.textContent = tasks;
}

//3. EventListeners
//Secondly we can set the EventListener for our input
searcher.addEventListener('input', searchTask);