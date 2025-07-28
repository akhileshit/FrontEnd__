// FUNCTION DECLARATION*******************
function greet() {
    console.log("Hello World!")
}

greet()
console.log("===================")

// FUNCTION EXPRESSIONS*******************
g1 = function greet1() {         // function_name is optional in function expressions
    console.log("Hello")
}
g1()

g2 = function () {               // 'expression' bexaz we are 'assigning' something here
    console.log("Hey")
}

g2();

sum = function (a, b) {
    console.log("Sum:", a + b)
}

sum(2, 3)
console.log("===================")

// ARROW FUNCTIONS************************

// no argument no return value
function add() {
    a = 10
    b = 5
    sum = a + b
    console.log(sum)
}
add()

a1 = () => {
    a = 10
    b = 5
    sum = a + b
    console.log(sum)
}
a1()

// no argument but return value
function diff() {
    a = 10
    b = 5
    diff = a - b
    return diff
}
console.log(diff())

a2 = () => {
    a = 10
    b = 5
    diff = a - b
    return diff
}
console.log(a2())


// argument but no return value
function prod(a, b) {
    prod = a * b
    console.log(prod)
}
prod(5, 2)

a3 = (a, b) => {
    prod = a * b
    console.log(prod)
}
a3(5, 2)

// argument and return value
function div(a, b) {
    div = a / b
    return div
}
console.log(div(5, 2))

a4 = (a, b) => {
    div = a / b
    return div
}
console.log(a4(5, 2))
console.log("-------------1")

//Arrow Function with only return statement

a1 = (a, b) => {
    return a+b;
}
console.log(a1(2,3))

//    (or)

a1 = (a, b) => a + b;    // a1 = (a, b) => return a+b;
console.log(a1(2,3))
console.log("===================")

//function declaration
function greet() {
    console.log("Hello World1!")
}
//function call
greet()

//function call
greet()
//function declaration
function greet() {
    console.log("Hello World1!")
}
console.log("-------------3")


//function expression 
greet = function() {
    console.log("Hello World2!")
}
//function call
greet()

// //function call              WON'T WORK
// greet1()
// //function expression 
// greet1 = function() {
//     console.log("Hello World2!")
// }
console.log("-------------4")


//arrow function
g1 = () => {
    console.log("Hello World3!")
}
//function call
g1()

// //function call                WON'T WORK
// g2()
// //arrow function
// g2 = () => {
//     console.log("Hello World3!")
// }


// Conclusion from above 4 programs:   Only 'Function declaration' is 'hoisted'

console.log("======================================")


// DATA TYPES IN JavaScript***************************************************************************

a = 256     //number 
console.log("Data Type of a is:", typeof(a))

a = 76.52       // number only
console.log("Data Type of a is:", typeof(a))

a = "Hello"     //string
console.log("Data Type of a is:", typeof(a))

a = true        //boolean
console.log("Data Type of a is:", typeof(a))


//object                                 object in JS but dictionary in python!!
s1 = {                   
    roll : 101,
    name : 'akhil'
}
console.log("Data Type of s1 is:", typeof(s1))


//array       'but type is object only'                              array in JS but list in python!!
a = [10, 20, 30.5, "Hey", true]
console.log("Data Type of a is:", typeof a)


