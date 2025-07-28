let add = (a, b) => a+b

let sub = (a, b) => a-b

let mul = (a, b) => a*b

let div = (a, b) => a/b

//all the above functions can be called as Callback Functions since they are all used as a parameter to another function.(BELoW)



function calculate(a, b, op) {             // Higher Order Function!! (handling add, sub, mul & div!!!)
    res = op(a, b)
    console.log("Result: " + res)
}

calculate(2, 5, add)
calculate(2, 5, mul)
calculate(100, 3, div)
calculate(100, 2, sub)              // Crazy....

// MOSTLY ARROW FUNCTIONS ARE PREFERRED FOR CALLBACK FUNCTIONS AS THEY ARE SIMPLE






//Operations on Circle using HOF's

let area = radius => 3.14 * radius * radius

let perimeter = radius => 2* 3.14* radius

let diameter = radius => 2* radius


function op_circle(radius, op) {
    res = op(radius)
    console.log("Result: " + res);
}

op_circle(5, area)
op_circle(5, perimeter)
op_circle(5, diameter)