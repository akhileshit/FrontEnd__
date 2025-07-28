// 21/11/24

// FUNCTION EXECUTION AND HOISTION IN JS
// Execution Context for "var" keyword
console.log(a);        //undefined           (since 'a' is already fetched and initialized it with value "undefined" in the "Memory Allocation Phase")

var a = 10;

console.log(a);         //10


// // Execution Context for "let" & "const" keywords
// console.log(b);         //ReferrenceError: Cannot access 'b' before initialization    (since b is already been fetched and placed it in TDZ w/o any values assigned)

// let b = 10;              // both let and const 

// console.log(b);


// // Execution Context for no keyword
// console.log(c);             //ReferenceError: c is not defined

// c = 10;

// console.log(c);

console.log("------------")

// Function Declaration Hoisting
console.log(greet("Alice"));  // greet() is accessible even before its declaration due to "function-declaration hoisting" in "Global Execution Context"

function greet(name) {
    return "Hello, " + name + "!";
}
