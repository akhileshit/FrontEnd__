// map(), filter() & reduce functions which we learnt earlier are all Higher Order Functions!!! (in-Built HOFunctions)

numbers = [10, 20, 30, 40, 50]
const doubled = numbers.map(num => num*2)
console.log("Doubled: " + doubled)


// function fun(num) {    //like
//     return num*2
// }

numbers = [5, 10, 15, 20]
const summed = numbers.reduce((total, num) => total + num,     0 )
console.log("Summed: " + summed)


// function fun(total, num) {    //like
//     return total + num
// }

// total = fun(0, num)


numbers = [13, 12 , 9, 5, 16]
const twoDigits = numbers.filter(num => num > 10)
console.log("Two Digits: " + twoDigits)


// function fun(num) {    //like
//     return num > 10
// }

// if (fun(num)) {
//     return num
// }


fruits = ['apple', 'banana', 'orange']
fruits.forEach(fruit => console.log(fruit));

// function fun(fruit) {      //like
//     return console.log(fruit)
// }