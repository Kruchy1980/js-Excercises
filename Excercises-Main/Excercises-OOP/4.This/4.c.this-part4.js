// WHY THIS IS LIKE IS - RULES.

// I.Example of defined connection and strict mode using.
// 1.Create function variable
const thisExample = function() {
        // With strict mode the defined value will be undefined
        // 'use strict'
        console.log(this.example, this); //this for check what this is  refered to.
        // the same will be with method
        const inside = function() {
                console.log(this.example, this); //the same with this in here.
            }
            // callback the function
        inside();
    }
    // 2. Callback of dedclared function
thisExample(); // Error result cannot read property of undefine so this - with strict mode is undedfined,   undefined is without strict mode.

// II. Example of classified connection
// 1. Create object
const user = {
        // set property
        age: 45,
        // Method of showing age - te best solution of using
        showAge() {
            console.log(this.age);
        },
        //  method declared as traditional function - worse metod
        showAge2: function() {
            console.log(this.age);
        },
        // Arrow function - need to be used differently if  at all
        showAge3: () => {
            console.log(this.age);
        }
    }
    // use the method on user
user.showAge(); // The connection raises implicitly/niejawnie, and the user is assigned to this so tis =user.

// 2. Other objet which we want to borrow the method from user object
const olek = {
    age: 25,
    showAge: user.showAge,
}

olek.showAge(); // As we can see te this is implicitly assigned to the othehr object whihch uses the first object method.

// Te same will be wit te oter function which is the common function
user.showAge2();
// Arrow function
user.showAge3(); // result undefined - beause te arrow function didnt create te binding/connection.

// If the context object inside which the methoce is called back than it will becomes assigned to this.

// III. Example of Explicit binding/connection
//  Simply we can tell to te function wit wat sould it bind te this - the call and apply metodes.

// 1. create object 
const human = {
        // example property
        pesel: 28710725367,
    }
    // 2. The method separately created.
const showPesel = function() {
        console.log(`Twój pesel to: ${this.pesel}`);
    }
    // Example of callback witout usin call or apply function
showPesel();
//The most used method call -> function.call(object)
showPesel.call(human); //makes aruments separately
// The rare used method apply
showPesel.apply(human); //takes argument as an array ->function.apply(object)

// 3. Oter method declaration
const showUser = function(name) {
        console.log(`Użytkownik ${name} posiada ten pesel: ${this.pesel}`);
    }
    // check method->call->(object, argument1, argument2, ..., argument'n')
showUser.call(human, 'Bartek');
// apply check - as a arguments we are giving the array of arguments - method->pply->(object, [argument1, argument2, ..., argument'n'])
showUser.apply(human, ['Adam']);

//IV. hard binding - wit fixed this
// bind the method - is not calledBack - method->.bind(object);
showPesel.bind(human); // is not called back but is new function which looks the same but is not the same. here this can not be changed dynaAmiczlly as for example in call or apply method
// Create the variable to the specified method
const showPeselUser = showPesel.bind(human);
// Now we can callback the mrthod werever we want and will be working with our human only
showPeselUser(); //as we can see it is binded to human only and shows whatever is in human method refered to this funcition.

// V. Binding with operator new
// Create class
class User {
    constructor(name) {
        this.name = name;
    }
}
// Crete an object/instance and all the dhihs are connected to our object/instance
const stasiek = new User('Stasiek');


// -------------------------------------------------
// !!!!!!!! ARROW FUNCTION AND THIS - does not creates te binding, just inherits it
// Create object
const users = {
    // Property
    age: 44,
    // Method
    showAgeNew() {
        console.log(this.age, this);
    },
    // And arrow function method/function
    showAge2: () => {
        console.log(this.age, this);
    }
}

//  Call back
users.showAgeNew(); // displays correctly 44 refers to object users.
// Arrow function
users.showAge2(); // undefined because it refers to the global scope