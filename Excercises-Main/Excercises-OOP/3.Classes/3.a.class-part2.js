//CLASS PART 2
// Parent Class
class Animal {
    // constructor
    constructor(age, name) {
            // parameter/s of constructor/class
            this.age = age;
            // Let's add anouther parameter in here eg name
            this.name = name;
        }
        // Prototype method of class with classes syntax
    breathe() {
        console.log('animal is breathing;)');
    }
}
// Create instance for later purposes.
const animal = new Animal(3);
// check
console.log(animal);

// 1.CLASSES AND INHERITANCE - inherited of child class/subclass.
// Create subclass Mammal - Ssak
// Thanx to keyword extends (which class) we are creating connection to class parent/master/super in our example Animal.
class Mammal extends Animal {
    // The methodes - because we remember that constructor is a method as well - which extends tha main/superclass. - automatically it looks like below
    // When we ceate the obhect from that class than the constructos is created automatically with parameters as in superclass. Later ofcourse we can add other properties etc
    constructor(lata, hairs, name) {

            // we can also add the parameters in super brackets and constructor as well - need to remember that the word does not need to be the same as inside  the superclass constructor
            // The keyword super is a method executed in inheritance and calls the superclass constructor and inhetits all its content to can be used in the subclass.
            super(lata, name); // we can also add the parameters in super brackets and constructor as well - need to remember that the word does not need to be the same as inside the superclass constructor.
            // !!!!!!!!!!!! Need to remember that the quantity of parameters are only dependend of properties inside the superclass - we can add any in there and than transfet to our subclass thanks to super word and surely to the subclass constructor like we want
            // // Super calla the constructor of superclass  inside itself for the subclass. but we still are abble to add anything in the constructor of subclass.
            // constructor(age) {
            //     // parameter/s of constructor/class
            //     this.age = age;
            // }
            // We can add other properties specified for our subclass in here - it means under the super word
            this.hairs = hairs;
        }
        // We can add the methode in here to which will be good when we show inheritance from other subclass
    drinkMilk() {
        console.log('Piję mleko - będę wielki!');

    }
}

//  It is enough to create our new more specified object/instqance mammal - the created object will have already the parameter from superclass constructor so we can add the age as well
// without adding age
const mammal = new Mammal();
// check
console.log(mammal);
// with adding age
const mammal1 = new Mammal(5);
// check
console.log(mammal1);
// with adding age and the property of our subclass
const mammal2 = new Mammal(5, 'black');
// check
console.log(mammal2);
// with adding age and the property of our subclass, and one more property added to the superclass constructor.
// The queue of parameters should be the same as in the subclass constructor when we are creating the new instance so (lata, hairs, name); but display is a little bit different look at line 60-62
const mammal3 = new Mammal(5, 'black', 'Irek');
// check
// Take a look for queue of parameters in console.
// The first parameters are always from the super class thanks to super word as well, and the rest is from our subclass constructor.
console.log(mammal3);


// 2.CREATING OF INHERIT CLASS PROTOTYPE.
// Thanks to prototype we have the access to our animal methode for any obhect created from mammal subclass
mammal3.breathe();
// and we have access to out own method as well -!!! it is not inheritance here
mammal3.drinkMilk();
// 3.CALING OF CONSTTUCROR OF SUPERCLASS.
//  see from line 31

// 4.EXTENDS.
//  see from line 24

// 5.SUPER.
//  see from line 31

// Now create the other subclass which willinherit from both classes method and it will be subclass of mammals
class Human extends Mammal {
    // That class has acces to both earlier classes Mammal and Animal
    // We can create the construcror of humamn passing to it all earlier properties in constructor of our class we need ot add all the properties
    constructor(age, name, hairs, height) {
            //  now take properties from both parent classes with super word
            super(age, name, hairs);
            // Now we can add own property/ies
            this.height = height;
        }
        // And we can add method/es in here as well
    walkLearning() {
        console.log('Uczę się chodzić :)');
    }
}

// Now let's take a look at new instance human
const human = new Human(10, 'Jarek', 'light', '130 cm');
// check if all properties are working
console.log(human);
// call the methode of walking
human.walkLearning();
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// But if we would like to use that properties from human to animal or mammal it won't work
mammal3.walkLearning(); // rewsult walkLearning is not a function
// and animal
animal.walkLearning(); // rewsult walkLearning is not a function
// As we can see the classes are inherited the methodes only above as same as the properties
const mammal4 = new Mammal(10, 'jeż', 'dark', '25 cm');
// check
console.log(mammal4); //result as we can see doesn't inherit the last fourth property/ies.