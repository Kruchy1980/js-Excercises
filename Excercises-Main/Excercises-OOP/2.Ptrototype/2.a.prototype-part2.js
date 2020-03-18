// PART 2 
// What the prototype includes. example
function Player() {}
// Because the Player constructor does not have the properties we do not us brackets - () when we create the instance.
const janek = new Player;
// check
console.log(janek);
// Just because the constructor has the prototype, than we can add as before in previuos part the prototype property which extends the consrtuctor and created object - but good is to avoid it.
Player.prototype.height = '185 cm';
// if we won't what is in the player constructor we can easily checks wht is in janek's __proto__ prototype like below.
console.log(janek.__proto__);

// ADDING ELEMENTTS TO PROTOTYPE(CONSTRUCROR).
// Create constructor - Citizen
function Citizen(country, citizenship) {
    // Properties for instances
    this.country = country;
    this.citizenship = citizenship;
    // methode for changing citizenship (inside constructor - not indicated/wskazane to create inside constructor)
    this.citizenshipChange = function(citizenshipNew) {
        this.citizenship = citizenshipNew;
        console.log(`Zmieniono obywatelstwo na: ${citizenshipNew} za pomocą metod w instaancji zadeklarowanej bezpośrednio w konstruktorze.`);
    }
}
// Citizen Creation
const albert = new Citizen('Poland', 'polish');
// check
console.log(albert);
console.log(albert.citizenship);
// Changing citizenship
albert.citizenshipChange('english');
// check
console.log(albert);
console.log(albert.citizenship);

// But much better is doing it like that - prototype outsice of constructot to not making the method doubled.
function Citizen1(country, citizenship) {
    // Properties for instances
    this.country = country;
    this.citizenship = citizenship;
    // We will separately createing that methode outside of constructor in prototype but to give a view how it searching for methode we can uncoment the methode inside constructor and once again run the citizenhip changing methode to observe that on the first place the instance is looking for the method/es inside constructors later on in prototypes and later on deeper inside the prototype of prototype until it finds the thing it is looking for. In one sentence we can tell that the counstructors is covering all other elements of onjects/instances/
    this.citizenshipChange = function(citizenshipNew) {
        this.citizenship = citizenshipNew;
        console.log(`Zmieniono obywatelstwo na: ${citizenshipNew} za pomocą metody w instancji - zadeklarowanej bezpośrednio w konstruktorze.`);
    }
}
// Creating the prototype
Citizen1.prototype.citizenshipChange = function(citizenshipNew) {
    this.citizenship = citizenshipNew;
    console.log(`Your old citizenship was changed to: ${citizenshipNew} metodą zadeklarowaną w prototypie konstruktora instancji.`);
}


// Citizen Creation
const zosia = new Citizen1('France', 'french');
const parmeggiano = new Citizen1('Italy', 'italian');
// check
console.log(zosia);
console.log(zosia.citizenship);
console.log(parmeggiano);

// Changing citizenship
zosia.citizenshipChange('german');
// check
console.log(zosia);
console.log(zosia.citizenship);
console.log(parmeggiano);

//  We can also add any property to the prototype using simple command - (constructor->.prototype.->.propertyName = value of property) - rather avoid it presently.
Citizen1.prototype.age = '18 - właściwość dodana w prototypie:) - unikać takiego dodawania właściwości do prototypu!:)';
// check
console.log(zosia.age); // which is defined/added to the prototype of Construcror - Citizen1 in our case.

// EXTENDIGN OF PROTOTYPES OF EMBEDDED OBJECTS.

// EG. arrays but it concerns to every objects in JS
// example of basic table with number
const arr = [5, 6, 7, 8];
// Now we can extend the array prototype with function of deleting specified objeect in our array.
Array.prototype.delete = function(index) {
        // our object this - our array - return that element to the console as well with using return command
        return this.splice(index, 1); //remove one element from index = index.
    }
    // check our array b4 deleting element
console.log(arr);
//  now we can check if it works eg
console.log(arr.delete(1)); // remove the element with index one = 6 in our array
// and now we can check our array
console.log(arr);