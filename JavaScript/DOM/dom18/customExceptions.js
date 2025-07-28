//Custom Exceptions

function validate(age) {
    if (age >= 18) {
        console.log("Eligible to Vote.")
    }
    else {
        throw new Error("Not eligible to vote.")
    }
}


console.log("Program starts")
try {
    validate(15)
} catch (ex) {
    console.log(ex.message);
}
console.log("Program ends")  //Not executed