// Exception Handling in JS

//Program with exception
function add() {
    try {
        a = 10;
        b = 20;
        c = a + b;
        console.log("Sum = " + sum)   //'sum' is not defined but used here
    }

    catch(ex) {
        console.log(ex.message) //Exception message
        console.log("Exception Occurred and Handled.")
    }

    finally {  //Finally Block
        console.log("Executing finally block.")
    }
}

console.log("Program Starts")
add()
console.log("Program ends")
console.log("--------------")


// Program without Exception
function add1() {
    try {
        a = 10;
        b = 20;
        c = a + b;
        console.log("Sum = " + c)   //'sum' is not defined but used here
    }

    catch(ex) {
        console.log(ex.message)
        console.log("Exception Occurred and Handled.")
    }

    finally {
        console.log("Executing finally block.")
    }
}

console.log("Program Starts")
add1()
console.log("Program ends")