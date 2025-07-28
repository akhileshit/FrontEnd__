//Custom Exceptions

function validate(age) {
    if (age >= 18) {
        console.log("Eligible to Vote.")
    }
    else {
        throw new Error("Not eligible to vote.")   //v.similar to java 
    }
}


console.log("Program starts")
validate(15)
console.log("Program ends")  //Not executed