// 22/11/24

// Funtion Overloading using spread operator in JS revisited..
function add(...args) {
    sum = 0
    for (i=0; i<args.length; i++) {
        sum += args[i]
    }
    console.log("Sum = " + sum);
}

add(1, 2, 3)
add(2)
add(1, 8)
add()
console.log("========================================");


// SCOPE OF A VARIABLES  (GLOBAL, LOCAL, BLOCK)        trivial like any other languages

var a = 10
function fun() {
    var b = 20
    console.log("a = " + a);
    console.log("b = " + b);
}

fun()
console.log("a = " + a)
//console.log(b)    //ReferenceError: b is not defined
console.log("------------");


// LEXICAL ENVIRONMENT
var a = 10
function outer() {
    var b = 10
    console.log("Outer function Executing.")
    
    function inner() {
        var c = 12
        console.log("Inner function Executing.")
        console.log("outer variable a: " + a);  //Global 
        console.log("inner variable b: " + b);  //Global for inner()
        console.log("inner variable c: " + c);  //Local for inner()
    }

    inner() // we must call this only inside outer() func if we want to execute it obviously.
    console.log("outer variable a: " + a);    //Global 
    console.log("inner variable b: " + b);     //Local for outer()
    //console.log("inner variable c: " + c);     //ReferenceError: c is not defined
}

outer()

// Lexical environment : nothing but "A variable will have access to its 'own memory'(local memory) + 'lexical environment'(it's parent scope, grandparent scope...,Global scope")
// Nothing new. That's All.


// Each functions will have its own "Execution Context"(like Stack Frame), all inside stack.
// At the bottom of the stack "Global Execution Context" will be present.