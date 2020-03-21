// PRIVATE AND PUBLIC PROPERTIES, CONVENYION, CLOSURES
// I. Hiding Data.
// A. Convention.
// 1. create the object/class - with not hided property/ies
class Cat  {
    constructor(color) {
        // public propeerty
        this.color = color;
        // private property with underscore
        this._color = color; // the underscore will inform the others 
        // that we want that property to be private
    }
    // create the method which let's us get to the private methodes
    // using getter which let's us get smth from the object
    getColor() {
        //for check
        console.log(this._color);
        // What exactly the method should do is return the property
        return this._color;
    }
    // setter - method which sets something in our property or whatever we need to
    setColor(value) { // value is our color so a w we can see naming is any.
        // Optionally we can check if the value we want to add is really string or not
        if (typeof value === 'string') { //if the value in this method is string than do what need to do - change color
        // set the color of our object private property
        return this._color = value; // sets and returns the new color
    } else { // if not than display such a message
        console.log('Wartość nieprawidłowa.');
    }
    }
}
// 2. Create instance of Cat - using it's color property
const kitty = new Cat('Grey');
// check 
console.log(kitty);
// we cn check it's color by call the object property
console.log(kitty.color); //public property
console.log(kitty.color); //private property
// Using the method from private property
kitty.getColor();
//  Now when the setter is set we can change the color of our Cat
kitty.setColor('Blue');
// if the value is not string
kitty.setColor(23); //value is a number
// check
console.log(kitty._color);

// B. Closures usage.
// EXAMPLE ONE
class Dog {
    constructor(name, dogColor) {
        // public property
        this.name = name;
        // Private property - cereate the variable
        let color = dogColor; // Why variable??
        // Varisble because it exists as long as the Constructor eists
        // We do not have the access to the variable when:
        //a. Constructor is removed
        //b. When we call the property outside of the function
        // By using closure may be arrow function or tradicional one
        this.getColor = () => {
            console.log(color);
            return color;
        }
        // Need to remember that the variable till lives in the function scope
        // Now we can also set the color in the setter
        this.setColor = value => { // the naming is any
            console.log(this.color = value);
            return this.color = value;
        }
    }
}

// Example if the variable is still availible
const squita = new Dog('Squita', 'Black');
// check
console.log(squita); // as we can see the object has only the name visible
//  by using closure
console.log(squita.color); //result undefined
// but
squita.getColor(); //result color of dog because in a scope of getter we
// have assigned color so in here getColor returns us the color which it remembers
// Now we can set the color
squita.setColor('Brown');

// EXAMPLE TWO.
//  Create a class
class Car {
    constructor(name, counter = 0, year = 2000, changeNumber = 0) {
        this.name = name;
        let _counter = counter; //default data = 0
        let _year = year; // default data = 2000
        let _changeNumber = changeNumber; // default data = 0
        // Now if we wn to read the provate data we need to set getters and if we want to change them dynamically
        // we need to set setters on the properties.
        this.getCounter = () => {
            // if the counter was changed than we can use the warning
            if (_changeNumber) console.log(`Uważaj licznik przekręcony ${_changeNumber} razy!`)
            console.log(_counter);
            return _counter; //if we want to return that result
        }
        this.getYear = () => {
            console.log(_year);
            return _year; //if we want to return that result
        }
        this.getchangeNumber = () => {
            console.log(_changeNumber);
            return _changeNumber; //if we want to return that result
        }
        // setters
        this.setCounter = (value) => {
            // first we want to increase the changeNumber incremention
            _changeNumber++; // automaticly
            // And now set the counter to our value
            _counter = value; //manually
            console.log(_counter);
            console.log( _changeNumber);
            // And now the information about cheating
            console.log(`Uważaj licznik jest przekręcany ${_changeNumber} raz!`);
        }
        this.setYear = newYear => {
            _year = newYear;
        }
        // Now =>  we cd add the method of calculating age of our car
        this.showCarAge = function(year) {
            let data = new Date().getFullYear();
            console.log(data);
            // let dataCalc =  data.getFullYear
            // console.log(dataCalc);
            console.log(data - _year);
            return data - _year;
        }
    }
}

// !!!! All default datas are created in a moment of new car creation
// They are automaticly added if we wouldn't define them in constructor
// Than we have to add them to the instance always
// But now we can add just when will be other than defined
//  Now create a car instance with defined values
const mercedes = new Car('Mercedes Benz');
// And the instance of second car with not defaulted values
const opel = new Car('Opel Astra', 200, 1997, 12);
// Check both cars separately
console.log(mercedes);
console.log(opel);
// As we can see without getteres and setters in both cases we do not have the private data
//  Now when the getters are declared we have acces to private datas as well
// Mercedes
mercedes.getCounter();
mercedes.getYear();
mercedes.getchangeNumber();
// Opel
opel.getCounter();
opel.getYear();
opel.getchangeNumber();
// setters
mercedes.setCounter('1000');
mercedes.setYear('2012');
// and check of the changeNumber of the mercedes
mercedes.getchangeNumber();
// Opel
opel.setCounter(10);
opel.setYear(1996);
// And check if the counter number was changed
opel.getchangeNumber();
// Now we can display the ages
// merc
mercedes.showCarAge();
// opel
opel.showCarAge();