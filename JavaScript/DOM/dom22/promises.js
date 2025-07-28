
prom = new Promise((resolve, reject) => {
    payment = "success"
    if (payment === "success") 
        resolve("Payment Successful.")
    else
        reject("Payment Failed.")
})

prom              //Promise Chaining
    .then((result) => {
        console.log(result)
        return "Message from 1st then"                 // This is like actually returning a new Promise!
    })
    .then((result) => {
        console.log(result)  //output: "Message from 1st then"
        return "Message from 2nd then"          
    })
    .then((result) => {
        console.log(result)  //output: "Message from 2nd then"
    })
    .catch((result) => {
        console.log(result)
    })


//Multiple catches don't work.
// We can use different asynchronous statements inside multiple ".then", hence resolving the limitations of callback-hell. (enables sequencial-asynchronous-operations!, making code more readable, maintainable & managable)
// promise chaining also acts as centralized error handling.

// it is like saying "if it's a success, then execute this async/sync statements sequentially"