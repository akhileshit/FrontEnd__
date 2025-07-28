/*
 Arithmetic Operators:
 +
 - 
 /   proper division
 *
 %
 **   exponent
 ++
 --

 Assignment Operators:
 = 
 +=
 -=
 *=
 /=
 %=

 Relational Operators:
 <
 >
 <=
 >=
 ==     Not Strict
 ===     Strict
 !=
 !==

 Logical Operators:
 &&
 ||
 !


 Ternary(Conditional) Operator:
  ? :


 Boolean Operators:
 true
 false

 */

a = 5
b = "5"
console.log(a == b)    // gives true !!
console.log(a === b)    // gives false


//Ternary operator
console.log(true? "Hello" : "Error")


//Program to find > of 3 no.'s using a ternary operator
a = 95
b = 55
c = 850
greater = (a>b ? a : b)>c ? (a>b ? a : b) : c
console.log("Greater: ",greater)
console.log("=========================================================")


// FUNCTIONS in JavaScript************************************

//*almost same as python

// 4 Types as usual:

// no argument no return value
function add() {
    a = 10
    b = 5
    sum = a + b
    console.log(sum)
}

// no argument but return value
function diff() {
    a = 10
    b = 5
    diff = a - b
    return diff
}

// argument but no return value
function prod(a, b) {
    prod = a * b
    console.log(prod)
}

// argument and return value
function div(a, b) {
    div = a / b
    return div
}

add()
console.log(diff())
prod(5, 2)
console.log(div(5, 2))