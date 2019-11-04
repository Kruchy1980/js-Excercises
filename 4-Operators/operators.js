document.write('Jestem Tu - javascript') // should be in document displayed

// Operators is a construcrion which executes some operation on values(arguments / operands) and returns the value.
// Operands are vazluer used by operators
// Behavior of operator can be different for different types of values for example
// Matheamtical operators +, -, *, / :
2 + 2 // returns number 4
'2' + '2' // returns string 22 here + is a concatnation
'2' + 2 // returns string 22 because first value is string so the second one is turned to string
2 + true // 3 because true is 1, false = 0
'2' + true // '2true' because true is turned to string
// Opetator can be a word as well: typeof, delete, new
// example
typeof 1200 // number
// ------------------------------
// Atithmeticzl operators:
let position = 2
// incrementation
position++ // firstly returns 1
// decrementation
position--
// pre-incrementation
++position // firstly add and returns 3
// pre-decrementation
--position

// Assingment:
position += 10 // increments of 10
position -= 16.5 // decrements of 16.5
position *= 4.2 // multiplies 4.2 times
position /= 2 // divides by 2

let newPosition = 0
newPosition += position

// Modulo = rest from divide
10 % 9 // 1 because 1 wil left from deividing
20 % 4 // 0 because 20/4 = 5 and nothing left;

// Power
2 ** 4 // 16  because 2 power 4 equals 16

// Logical operators >, <, >=, <=, ==, ===, !=, !==;
20 > 40 // false
'text'.length > 3 // true because text = 4 letters
20 <= 20 // true becuse 20 = 20

// Equlity operator
'text' === 'text2' // false
'text' === 'text2' // false

'2' == 2 // true do not check the type
'2' === 2 // false checks type of data as well
// Different than
'2' != 2 // false do not check the type
'2' !== 2 // true checks type of data as well

//= == and !== do not converse the types

// Negation
!'coś'
// Double negation
!!2
!!200

// Logical Product - or checks only one condition
true || false // true
false || true // true
true || true // true
true || false // true
false || false // false
null || 200 // false
// Logical sum &&- and checks both conditions
true && false // false
200 && 0 // false
'1' && '2' // false
'1' && '' // false
20 > 10 && 10 < 20 // false

// Oparators queue
2 + 3 * 5 // 17
;(2 + 3) * 5 // 25
'2' + 3 * 5 // 215 - 3*5 =15 + string 2

// Condition operators three arguments
3 > 2 ? 'yes' : 'no'
