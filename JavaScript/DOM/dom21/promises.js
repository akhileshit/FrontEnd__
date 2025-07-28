
// PROMISES IN JS

prom = new Promise((resolve, reject) => {  //"Executer function" is given as a parameter for Promise constructor
    payment = "success"
    if (payment === "success") 
        resolve("Payment Successful.")
    else
        reject("Payment Failed.")
})

prom
    .then((result) => {
        console.log(result)
    })
    .catch((result) => {
        console.log(result)
    })


//resolve & reject are functions