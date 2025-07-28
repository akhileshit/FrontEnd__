// 29/11/24
// kod title: Higher Order Functions and Callback Functions 

// Using Function Declaration
function find_area1(l, b) {
    return l*b
}

// Using Arrow Function
let find_area2 = (l, b) => l*b


console.log(find_area1(2, 3))
console.log(find_area2(5, 3))