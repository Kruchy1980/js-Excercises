// Literals what is it?? 
//That is set of symbols used to creating datatypes
const txt = 'some text';
let score = 12.48;
// With the literals we can crete objects as well
// Straight datatypes are not objects but we cn use and execute methodes on them but it works a little bit different than methodes on objects.
// ability - is tje information of value state
// Methode is a action which returns mostly new value but won't change the old data .

// Abilities;
txt.length; //returns the length of our text
txt[2]; // index of element in our string

// Methodes needs to be called - methodename();
// Methodes -  methodes embeded in language:
txt.toUpperCase; // methode without brackets shows us informarion about the methode
txt.toUpperCase(); // returns the string with uppercased letters
score.toFixed(); // returns rounded value of number - with the parameter inside of brackers it shows us number rounded to specified places after coma - dot in here :(
txt.indexOf('t'); //returns the index of first  letter found in the string

// New values we need to assign somewhere

const newTxt = txt.toUpperCase();
const fixedNumber = score.toFixed(1);

// Straitght types does not have abilities and methodes so how it happens:
//1 create variable:
const name = 'Józek';
name.length; // 2 Now the program says ok i will create object and than i can use methode which i want
//String created:
const nameTemporary = new String(name);
nameTemporary.length;
// And Remove the string object
// 3 Return the length
//--------------------------------------------------------
// We can create objects as well but they have their disadvantages:
const userName = new String('Jasieńka');
const userID = new Number(2);
const female = new Boolean(true);