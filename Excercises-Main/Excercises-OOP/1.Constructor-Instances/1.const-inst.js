//  Constructor  - created as a variable cab be created for couple ways - 
//1. As a functional expression - with anonymous function

// const Car = function() {}
// now we created empty constructor without giving to it any parameters and attributes ut even with it we can create te instance which willl bee reffered to the constructor eg.

// const polonez = new Car();
//  Now i we display it in console we will get the empty object witnh name Car without any property.
// console.log(polonez);

//2. Other way for creating the constructor
// Just because the constructor is hoisted that we do not have to worry about creating object because we have created the object in line 7.
// function Car() {}
// console.log(polonez);
// We need to remember that new with function (our Car() in here) is creating the object reffered to the constructor.
// Main rule is to firstly create the constructor later on instance but just because the function constructor is hoisted to the top of scope we do not have to worry about it in here
// So as we said the new with function creates us:
//1. New (empty this time) object
//2. After creating the connection of 'this' with our constructor appeares - remember that jus after creating and we can check it by disabling our console logs and to the constructor add the console log with this which will be our object - like this

// function Car() {
//     console.log(this);
// }

//3. The property of __proto__  appeares
//4. The function callback and assign to the variable of our object.
//--- Now we cazn add any property to our constructor and it will be assigned to our object.

function Car(name) {
    this.name = name;
}
// and now we can create the instance with name eg.
const polonez = new Car('Polonez');
// check if it works
console.log(polonez);
// now we can take the properties of our object like that
document.write(polonez.name + ' ') //- and the parameter name which we calledd 'Polonez' will appeare in our document like that :)
    // Since now we can create many objcts which are reffered to the same prototype in constructor eg.active
const jeep = new Car('Cheerokie');
// check
console.log(jeep.name);
// display
document.write(' ' + jeep.name);

// Now we can change every of the instance data but it will be only assignet to our specified object not to all of them eg.
polonez.name = 'Polonez - już zabytek';
// So the polonez name will be changed 
document.write(polonez.name + ' ');
//but the jeep's name lefts the same
document.write(jeep.name + ' ');

///-------------------------------------
///-------------------------------------
///-------------------------------------
// We can check what is the constructor of objedt using simple callback like eg.
console.log(polonez.constructor);
console.log(jeep.constructor);