// Filtering and Searching tasks
//1. Filtering
//Firstly we can create the array of our tasks where the tsks will be added
//-----------REMINDER----------------
// the example array for now
const taskArray = [34, 45, 198, 495, 32, 34, 52, 23, ];
//1. Filter methode
// Filter creates  the new array withe filtered elements
// We want odd number for example
const oddNumbers = taskArray.filter(el => el % 2);
// and even numbers
const evenNumbers = taskArray.filter(el => !(el % 2));
// numbers bigger than
const numbersBiggerThan50 = taskArray.filter(el => el > 50);
//2. Map methode 
// Map creates the new array as well and execute some action on the new aray
// a Multiply elements
const double = taskArray.map(el => el * 2);
// b create string - add a string to it empty or with value
const makeString = taskArray.map(el => el + "");
// or
const makeStringWithContent = taskArray.map(el => el + " papierosy");

//3. forEach
// a Multiply elements
const multiplyElements = taskArray.forEach((el, index) => taskArray[index] = el * 2);
// to check what has happened we need to return our prevoious array not the variable declared for method array.forEach()
console.log(taskArray);

// Let's make the same effect with forEach loop wich is not creating the new array just modifying/mutating the old one

//--------------END OF REMINDER--------------------
//SEARCH - searcher