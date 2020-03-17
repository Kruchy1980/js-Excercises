// PROTOTYPE
// Befor we create the protoyype firstly we need to create the constructor because the prototype is a part of constructor
//1. Constructor creation with prperties
const Person = function(name, age) {
    this.name = name;
    this.age = age;
    // The empty array for their children for instance
    this.children = [];
    // now we can create the method which will add the childrens to our object array
    this.addChildren = function(childName, childAge) {
        this.children.push(childName, childAge);
    }
}

//2. Now we can create two instances with the basic datas

const marek = new Person('Marek', 24);
const agatka = new Person('Agatka', 22);

// now we can check if it is working by adding anyone to mareks or agatkas object any children.
marek.addChildren('Zenek', 1);
agatka.addChildren('Zenek', 1);
//  check if it works
console.log(marek, agatka);

//----------------------------------------
//----------------------------------------
//----------------------------------------
// Disadvatages of implementinf a method like that
//1. every time when is generated the mew Person the method is generated as well 
//2. Not every Person needs to have the children so that is wasting of computer memory - Do not do that like this
// B4 the classes appeared in JavaScript the methodes were added with prototype like that:
//1. Create constructor
const Person1 = function(name, age) {
    this.name = name;
    this.age = age;
    // The empty array for their children for instance
    this.children = [];
}

//2. Now create the method outside the contructor to use it anytime will be needed.active
Person1.prototype.addChildren = function(childName, childAge) {
    this.children.push(childAge, childName);
}

//3. Now we can create istance one or more
const oliwia = new Person1('Oliwia', 30);
// check if is created here the array length will be 0 because the children are added later
console.log(oliwia);
//4. Now we can add the child to oliwia
oliwia.addChildren('Zuzia', 0);
// check if is created with children array value
console.log(oliwia);

//--------------
//--------------
//--------------
// We can check if our Person1 constructor has any prototype or not and what the prototype is exactly with the method below
console.log(Person1.prototype);
//-------------------
// We can add to our prototype sny property as well but we chould aboid it and the classes won't let us do that even but to show lets try.

Person1.prototype.gender = 'female';
// So from now one all the instances from constructor Person1 will nave such a property.
// check
console.log(oliwia.gender);
//or even
console.log('Oliwia is a ' + oliwia.gender + ' ;)');