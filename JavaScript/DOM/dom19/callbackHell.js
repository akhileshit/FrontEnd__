// function search() {
//     console.log("Searching for the product..")
// }

// function select() {
//     console.log("Selecting the product..")
// }

// function add_to_cart() {
//     console.log("Adding to the cart..")
// }

// function pay() {
//     console.log("Making the payment..")
// }

// function receive_order() {
//     console.log("Waiting to receive the order..")
// }

// setTimeout(search, 2000)
// setTimeout(select, 2000)
// setTimeout(add_to_cart, 2000)
// setTimeout(pay, 2000)
// setTimeout(receive_order, 2000)
 
//      (or)

setTimeout(function search() {
    console.log("Searching for the product..")
}, 2000)

setTimeout(function select() {
    console.log("Selecting the product..")
}, 2000)

setTimeout(function add_to_cart() {
    console.log("Adding to the cart..")
}, 2000)

setTimeout(function pay() {
    console.log("Making the payment..")
}, 2000)

setTimeout(function receive_order() {
    console.log("Waiting to receive the order..")
    console.log("--------")
}, 2000)

// the above code works in Asynchronous way. But we want each one to run one after the other after 2s 'each'

//How to do that?


// CALLBACK-HELL  (OR)   PYRAMID OF DOOM!!!
setTimeout(function search() {
    console.log("Searching for the product..")
    setTimeout(function select() {
        console.log("Selecting the product..")
        setTimeout(function add_to_cart() {
            console.log("Adding to the cart..")
            setTimeout(function pay() {
                console.log("Making the payment..")
                setTimeout(function receive_order() {
                    console.log("Waiting to receive the order..")
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)
// This will work. But there is problem.. LOok at the code. How complex it is and will be if program is huge
