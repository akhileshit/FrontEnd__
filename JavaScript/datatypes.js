//19/11/24

// arr = new Array(10, 6.77, "js", true)  // using Array Constructor
arr = [10, 6.7, "js", true ]
console.log(arr)
console.log(arr.length)

arr.unshift("aaa")   //add @ 1st
console.log(arr)
console.log(arr.length)

arr.unshift("bbb")
console.log(arr)

arr.shift()         //remove 1st
console.log(arr)

arr.shift()
console.log(arr)

arr.push(1000)    //add @ end
console.log(arr)

arr.push(5000)
console.log(arr)

arr.pop()       //remove @ end
console.log(arr)

arr.pop()
console.log(arr)

arr[4] = 99        //Accessing/Updating array elements
console.log(arr)

delete arr[4]      //removes specified element (leaves the trace of deletion!!!!)
console.log(arr)
console.log("-------------1")


arr = ["red", "blue", "green", "yellow", "pink"]
console.log(arr)

console.log(arr.slice(1,4))           //slice()           (returns a copy of sliced items)
console.log(arr)

console.log(arr.indexOf("yellow"))          //indexOf()
console.log(arr.indexOf("violet"))

console.log(arr.includes("yellow"))         //includes()
console.log(arr.includes("violet"))

console.log(arr.sort())             //sort()                (sorts original array itself)
console.log(arr)

console.log(arr.reverse())      //reverse()             (reverses original array)
console.log(arr)

arr.splice(2,2,"black","black","lime")          //splice()               //like remove&replace a chunck   replace:optional
console.log(arr)
console.log("-------------2")


arr = ["red", "blue", "green", "yellow", "pink"]
console.log(arr)

arr.forEach( i => {                 // froEach()
    console.log(i)
});

 arr1 = [10, 20, 30, 40, 50]
 arr2 = arr1.map(num => num**2)             // map()                  //like list comprehensions in python
console.log(arr1)
console.log(arr2)
















console.log("-------------3")
arr1 = [3, 4, 5]
arr2 = [1, 2]
combined = arr1.concat(arr2)
console.log(combined);

tech = ["java", "python", "js", "mysql"]
skills = tech.join("--")
console.log(skills);

fruits = ["apple", "banana", "cherry"]
let [f1, f2] = fruits;                   //Destructuring     // like "unpacking" in python tuples
console.log(f1)
console.log(f2)

