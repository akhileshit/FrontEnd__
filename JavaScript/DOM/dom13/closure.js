// Closures in JS
function outer() {
    var out = 10
    return function inner() {
               console.log(out)
           }
}

var res = outer()
console.log(res)
res()    //like inner()!!!   This is literally crazy...    //Even after the method termination(outer()) we are able to access "out" variable !! due to closures       (provides Encapsulation)


// Best example for closure is written by me in DOM/dom05 todo.js. That is crazy...


// end