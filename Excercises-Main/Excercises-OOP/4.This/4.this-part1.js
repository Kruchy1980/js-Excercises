// 'use strict'; // we should declare it here if anytime and it is defined for all elements in that file.
// THIS
// WHEN CAN WE MEET WITH THIS.

// First of the conditions we can meet with 'this' is a global scope and specify for web browsers it is a window.

// 1. this as global object = window of web browser.active.

// 2. More interested for us will be 'this' in functions:
// Creating funtion with just logging thisa as example in browser console
const fun = function() {
        // console.log(this.example); //result undefined; on that level beause 'this' in here refers to the global object as the window is.It is called the defined connection.
        // but using onlu this
        console.log(this); // we will get the global object window and with strict mode this will be undefined in here.
        // Here add console loge to name thanks to object reference;
        console.log(this.name);
    }
    // Calling back the function
    // fun(); //result undefined; but the this is created in here when is called back and creates the connection

//  Let's create object example
const obj = {
        //  for example one property
        name: 'Jurek',
        // and the reference to function
        // fun: fun, // and than in function add this.name
        // Lets do it another way
        showName: fun,
    }
    // create the function which will be refered to the first function fun
const func = fun;
//  Now lets call the function directly and through the object
// fun(); // result uncdefined;
// obj.fun(); //result here is 'Jurek'; becausereference is through the object with such a property as name
// now dall the object method
obj.showName(); //result will be the same as earlier from property
// Assignement this to some object eg document with addEventlistener
document.addEventListener('click', function() {
    console.log(this); //result on click = this. = document
    //  but if we add the second function inside
    const inside = function() {
            // But if we inside the function which is here use the strict mode, 
            'use strict'; //result  = undefined;
            console.log(this); // we will see that that function would not inherit the this from EventListeber
        }
        // Cllback the function inside even if it is inside the Event listener we need to disable the strict mode as well to see that
    inside();
})