// What the variable is
// Variable are the possibility for saving data in the memory to use them in the program anytime we want to.

// ATTRIBUTES OF VARIABLES IN JS:
// name
// space in memory where the id wchich is the name of variable leads
//value
// We czn add one attribute to the space where the gobal and local dta is created
// The variables in JS doesn't have their type but their values have.
// Something to practice
// Example
let idUser = 76;
console.log(typeof idUser); // number

// Now to name variables:
// in english - the best
//The best is to good describe the variable
// Using Camel Case
// no spacesn and '-' and surely not number on the beginning
// not large letter on the beginning, reserved words  - variables shouldn't use the reserved words
// the $ or underscore shouldn't be used in variable naming

// Variable declaration is just creating variable but does not mean that it has any value
// Variable definition is the value of variable
// The only var variable can be redeclared and redefined
// let variable can not be redeclared but can ber redefined
// const vatiable can not be redeclared or redefinen it is called fixed variable as well

// We can declare many variables after coma example
let name, age, address; // Variable just declared
let position = [200, 100],
  score = null,
  time = 20.2,
  ipAddress; // As we can see we can declare more tan one variable together with their values as well.
const firstUser = "Ola",
  secondUser = "Eryk";

//-----------------------------------------------------------------
// Example:
let example1 = 200;
example1 = example1 + 1; // new value 201
example1++; // 201 + 1 = 202

const example2 = 200;
example2 = example2 + 1; // error can not change variable const
// the same is when:
example2++; //equals 200 + 1 buut const can not be changed

let example3 = example2; // will be 200 but creates two spaces in memory

//-----------------------------------------------------------------
// Const
const arrayExample = [1]; // created array with one element
arrayExample = [1, 2]; // error appeare becouse arrayExzmple is const variable
arrayExample[1] = 2; // now we can add second value to const array it means that modifications can be done in this object it means that const object can be modified but can not be assigned new element.

// Objects global with var, let and const
var globalProperty1 = "za pomocą var"; // var creates variable assigned to window as well
let globalProperty2 = "za pomocą let"; // Does not work with window
const globalProperty3 = "za pomocą const"; // Does not work with window as well it means that they are not global
// window.globalProperty1;

// Hoisting - changing the order of execute code in JS
console.log(varVariable);
console.log(letVariable);
console.log(constVariable);
var newVariable = 1; // undefined
let letVariable = 1; // error not defined
const constVariable = 1; // error not defined

//---------------------------------------------------------------
// If we want not to change variable is great to use const example
const userName = "Henryk";
// If the value will be changed
let points = 200;
// We can use the var variable ut only if it has any sense
var userLastLoginDate = "15.10.2018"; //W can use the var if are creating app for older web browsers.

// lIST OF RESERVED WORDS (Can not br used as the names of variables)
/*
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
 */