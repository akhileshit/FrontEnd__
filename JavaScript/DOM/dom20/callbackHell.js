//03/12/24

//Just used Function Declaration
// setTimeout(function choose_movie() {
//     console.log("Choosen a movie.")
//     setTimeout(function choose_time_loc() {
//         console.log("Choosen time & location.");
//         setTimeout(function select_seats() {
//            console.log("Selected a seat.") 
//            setTimeout(function make_payment() {
//                console.log("Made the payment.")
//                setTimeout(function enjoy_movie() {
//                    console.log("Enjoyed the movie.")
//                }, 10000)
//            }, 5000)
//         }, 2000);
//     }, 5000)
// }, 5000)

//Just used Arrow Function
// setTimeout(() => {
//     console.log("Choosen a movie.")
//     setTimeout(() => {
//         console.log("Choosen time & location.");
//         setTimeout(() => {
//            console.log("Selected a seat.") 
//            setTimeout(() => {
//                console.log("Made the payment.")
//                setTimeout(() => {
//                    console.log("Enjoyed the movie.")
//                 }, 10000)
//             }, 5000)
//         }, 2000);
//     }, 5000)
// }, 5000)

//Just used Function Expression
setTimeout(function() {
    console.log("Choosen a movie.")
    setTimeout(function() {
        console.log("Choosen time & location.");
        setTimeout(function() {
           console.log("Selected a seat.") 
           setTimeout(function() {
               console.log("Made the payment.")
               setTimeout(function() {
                   console.log("Enjoyed the movie.")
               }, 10000)
           }, 5000)
        }, 2000);
    }, 5000)
}, 5000)

// Code difficult to read and maintain