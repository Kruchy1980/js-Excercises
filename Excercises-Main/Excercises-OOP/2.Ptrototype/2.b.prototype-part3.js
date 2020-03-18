// PROTOTYPE PART 3 - PROTOTYPE CHAIN + Instanceof, Object.getPrototypeOf and some informations about connection between Inxtance and Constructor/Class prototype,

// 1. Prototypes chain
// eg array
arr1 = [1, 2, 3, 4];
// __proto__ of array
arr1.__proto__ // Constructor prototype.
    // Now we can go deeper into our array proto
arr1.__proto__.__proto__ //deeper inside Constructor prototype = Object prototype
    //  deeper into proto
arr1.__proto__.__proto__.__proto__ // result will be null what means there is nothing deeper but we can create deeper paths by ourself and than we could go deeper into prototypes.

// If there is not any property in our object the result will be undefined because we do not have any of the property inside the array any protos
console.log(arr1.age);

//eg let's consider such a situation
//arr.age = 20;
// proto1(the closest to array).age = 20 - than first will be taken result of array.age and will be exeduted nothing else bedause the property will be found. If else the result will be taken from deeper place etc. and if there won't be such a property in any of prototypes than the result wil equal '0', but only then.
// eg - not to do it at home :).
// create the property for object
Object.prototype.age = 20;
// Now we can display the arr1.age ot earlier
console.log(arr1.age);

// INSTANCEOF - checks if one element/oject is an instance of other - result boolean
// eg (what -> instanceof -> object)
arr1 instanceof Array;
// check
console.log(arr1 instanceof Array); //result true
console.log(arr1 instanceof Object); //result true, because arr - object
console.log(arr1 instanceof String); //result false - because array is not a string.

// OBJECT.GETPROTOTYPEOF - checks What is the  prototype of element/object/instance
// eg
Object.getPrototypeOf(arr1);
// check
console.log(Object.getPrototypeOf(arr1));
//  We need to remember that arr1 is connected with Array through the prototype.
// arr1 -> prototype -> Array
//  Need to remember that all informtion about constructor are not directly insice object but in prototype so if we want to display the informtion we can get directly to prototype of constructor like below
arr1.__proto__.constructor;
// Check
console.log(arr1.__proto__.constructor);