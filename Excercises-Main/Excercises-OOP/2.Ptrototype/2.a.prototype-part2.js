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
        console.log(`Zmieniono obywatelstwo na: ${citizenshipNew} za pomocą metod w instancji.`);
    }
}
// Citizen Creation
const albert = new Citizen('Poland', 'polskie');
// check
console.log(albert);
console.log(albert.citizenship);
// Changing citizenship
albert.citizenshipChange('angielskie');
// check
console.log(albert);
console.log(albert.citizenship);