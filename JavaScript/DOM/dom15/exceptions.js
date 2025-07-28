// Exception Handling in JS   :Disruption for the normal flow of execution
function add() {
    try {       // v.similar to Java
        a = 10;
        b = 20;
        c = a + b;
        console.log("Sum = " + sum)   //'sum' is not defined but used here
    }

    catch(ex) {
        console.log("Exception Occurred and Handled.")
    }
}

console.log("Program Starts")
add()
console.log("Program ends")