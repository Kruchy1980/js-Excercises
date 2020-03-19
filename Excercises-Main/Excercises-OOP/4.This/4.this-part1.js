// PART 1
// CLASS - WHAT IS IT IN JS
//Class we can say that is a box/container for constructor and all its methodes and properties

// HOW TO CREATE CLASS
//  Class creation - keyword class - lowercase, Name - uppercase according to convention.
class Familiy {}

// Functional class is defined so we can ccreate our object immediatly which will be empty at present.

const kowalscy = new Familiy();
// check
console.log(kowalscy);
// It is the minimum what should be done in here to create an insrance of class

// If we would like to add any properties or methodes we need to add the constructor to class as well.
class Family1 {
    constructor() {

    }
}
//  now we can creat4e the instance - which will be empty until we do not fill up the constructor
const blaszczykowie = new Family1();
// check
console.log(blaszczykowie);
// SUMMARY
// Classes are the containers for methodes used later by our instance. 
// !!!! Constructor in class is a method which includes all properties which we would like to use in our instance/es. 
//  Every other methodes which will be implemented outside constructor will be added to the prototypes.
//  Comparision with the constructor itself
// 1. class
class Family2 {
    constructor(name) {
            this.name = name;
        }
        // Adding prototype/methode to class
    addMember() {}

}
// instance
const zielinscy = new Family2()
    // check
console.log(zielinscy);
// Check the class
console.log(Family2);
// Check the prototype in class
console.log(Family2.prototype);


// 2. Constructor
const Family3 = function(name) {
        this.name = name;
    }
    // Adding prototype to constructor
Family3.prototype.addMember = function() {}

// instance
const mroczkowie = new Family3();
// check
console.log(mroczkowie);
// Check the constructor
console.log(Family3);
// Check the prototype in construtor
console.log(Family3.prototype);

// Both are equal. Take a look that whatever is inside the constructor itself, the same thing we can do in the class constructor, and because we didnt define the name the name in both objects is undefined.
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
// CLASS PROTOTYPE
//  As same as in constructor we can add method to the constructor of class and than by creating object every of them will have the same method 
// OR
// Or we can add the method as a prototype in class under the constructor and than the instance which will really need it will have the prototype, beside the queue of executing the methodes is the same like in constructor so first is executed from class construftor and if it is not there than the prototype will be searched for the methode so the coverage will appeare as same as levels of embedded methodes.
// EXaMPLE

//  Class
class Family4 {
    constructor(name) {
            this.name = name;
            // Adding methode inside the class constructor:
            // this.addMember = function() {
            //     console.log('Wywołane z instancji/konstruktora klasy.');
            // }
        }
        // Adding prototype/methode to class
    addMember() {
        console.log('Wywołane z Prototypu konstruktora.');
    }
}
//  Create instance
const jurkowie = new Family4('Jurkowie');
// check
console.log(jurkowie);
// execute the methode on jurkowie
jurkowie.addMember('MemOne');
// check
console.log(jurkowie); // as we see the methode was called from the instance of class constructor.
// We can disable the instance of class constructor and than result will be taken from prototype.

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
//  CONSTRUCTOR FUNCTION AND CLASS
// The difference between the two constructors is only that that the class is a box for constructors ant its methodes, but the construcror itself cane contain the properties and methodes being created separately.


//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
// CLASS - EXPRESSION
// The class expression is jus different type of class declaration as we can see under the point no 3.
// 1. Function declaration
const Family5 = function() {}
    //Or which will be hoisted on the top of script
function Family6() {}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! this is Class:)
//2. Class declaration
class Family7 {}
// 3. class expression
const Family8 = class {}


// Lets create more complicated class
class Family9 {
    // ...names will be an array of elements thanks to spread operator
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
        this.family = 'Kulczykowie';
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`You have currently added the ${newMember} to the family ${this.family}.`);
    }
}
// create instance
const kulczykowie = new Family9(3, 'Janek', 'Zenek', 'Oliwia');
// check
console.log(kulczykowie);
// add member
kulczykowie.addMember('Alek');
// check
console.log(kulczykowie);

//---------------------------------------------------
//---------------------------------------------------
//---------------------------------------------------
// STATIC METHODES
// That methodes are assigned directly to the class and is availible only form the level of class/constructor
// eg

class Family10 {
    // ...names will be an array of elements thanks to spread operator
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
        this.family = 'Grabowscy';
    }
    addMember(newMember) {
            this.names.push(newMember);
            this.members++;
            console.log(`You have currently added the ${newMember} to the family ${this.family}.`);
        }
        // Now we will use the static method for create the new family - prefix statiic means that it this method is assigned to this class only
    static makeFamily(...members) {
        console.log(members); //just for show we will return rhe members of family only.
    }
}
// create instance with none static method
const grabowscy = new Family10(3, 'Janek', 'Zenek', 'Oliwia');
// check
console.log(grabowscy);
// add member
grabowscy.addMember('Alek');
// check
console.log(grabowscy);

// Create instance with static method
Family10.makeFamily('Jula', 'Hirek', 'Ola', 'Tola');

//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------
// WHAT WE NEED TO REMEMBR ABOUT CLASSES YET:
// 1. Are not subject to hoisting/ nie podlegają hoistingowi.

// 2. Smaller possibilities of making mistakes eg there is no possible to make instance without word new/ mniejsze mozliwości popełnienia błędu choćby nie da się wywołać bez new

// 3. Are clearlier than construcrors itself / są czytelniejsze

// 4. Theere is more simple to code some things like inheritance for example by prefix extends / uproszczenie w napisaniu wielu innych rzeczy jako np. dziedziczenie (extends).

// 5. What can be coced thanks to class may be coded in ES6 pure as well but with classes it is easier / co da się napisać za pomocą klasy, mozna też napisać w ES6, ale jest to bardziej (lub zdecydowanie bardziej) zawiłe. Tu jest proste.