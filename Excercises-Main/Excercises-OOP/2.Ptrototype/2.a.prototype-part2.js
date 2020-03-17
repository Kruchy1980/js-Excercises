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