//WHY THE THIS IS NEEDED??
// EG
// Create funtion eg showName
function showName() {
    console.log(this.name);
}
// Create Object 1
const kate = {
        name: 'Kate',
        showName: showName,
    }
    // Create Object 2
const michael = {
        name: 'Michael',
        showName: showName,
    }
    // Check the name of objects
kate.showName();
michael.showName();
//-------------------------------------------
//-------------------------------------------
//-------------------------------------------
// WHEN THE CONNECTION OF THIS ARISES??
// 1. Create function 1
function one() {
    // 'use strict' //won't let us to defined assignemt to the object in that place
    // just for chechk what the this is
    console.log(this); //As we can see it is a a window.
    this.name = 'pierwsza';
    return this.name; // that was assigned to window that is why by calling backe the function we can see the name
}
// 2. callback function one
one(); //here the this rises as a window object
// check
console.log(one());
//3. object1 creation
const object1 = {
    two: one,
    // let's create another function in here which logs us out the thiss on the object level
    four: function() {
        console.log(this);
    }
}

//4. calling back the function two from obhect1
object1.two(); // - referencr to object which under 'two' has reference to the function
// so we can sazy that at present the connection concerns the object1 which contqaines reference to the function one.
// check
console.log(object1.two());
// 5.Assigning the function from object to variable three
const three = object1.two;

// 6. calling back the reference from variable three
three(); // the three containes the reference to the function one directly not through the object1 - complicated but clear
// check
console.log(three());

// 7. Callback the function from object1.four
object1.four(); // here this is our object

//8. Create new variable five and assign the object.four to that

const five = object1.four;
// check
console.log(five);
// callback the four function from variable
five(); // place where that function was called back = window
// check
console.log(five()); //undefined result


// ------------------------------------------
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ------------------------------------------
// CLUE FOR UNDERSTANDING THIS - Remember where the function called back not where was created than it will be easier to understand the this.