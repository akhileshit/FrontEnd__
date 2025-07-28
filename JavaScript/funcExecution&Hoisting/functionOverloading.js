// FUNCTION OVERLOADING IN JS
function fun() {
    console.log("0-param-function");
}

function fun(a) {
    console.log("1-param-function");
}

function fun(a, b) {
    console.log("2-param-function");
    console.log(a);
    console.log(b);
    
}


fun()        //2-param-function !!!!
fun(1, 2)    //2-param-function !!!!        what?!!

//fun() is overwritten twice by fun(a) & fun(a, b)
//Rememember? Function is also a type of object in JS. and also just by name, the functions was stored in the memory in Memory Allocation Phase.
//Hence traditional function-overloading is not supported in JS.
console.log("-----------");


// Simulating Function Overloading in JS (using "arguments" Object):

function add() {
    if (arguments.length === 2) {   // !!!!!!
        return arguments[0] + arguments[1];  // Adds two numbers
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];  // Adds three numbers
    } else {
        return "Invalid number of arguments.";
    }
}
  
console.log(add(1, 2));       // Output: 3
console.log(add(1, 2, 3));    // Output: 6
console.log(add(1));          // Output: Invalid number of arguments.


//"arguments" Object has length and index. But it is not an Array.
console.log("-----------");


// Simulating Function Overloading in JS (using "Spread Operator"):

function add(...args) {
    if (args.length === 2) {
      return args[0] + args[1];  // Adds two numbers
    } else if (args.length === 3) {
      return args[0] + args[1] + args[2];  // Adds three numbers
    } else {
      return "Invalid number of arguments.";
    }
}
  
console.log(add(1, 5));       // Output: 6
console.log(add(1, 5, 3));    // Output: 9
console.log(add(1));          // Output: Invalid number of arguments.


//Note:
//Spread Operator collects all arguments in "actual array" (args).