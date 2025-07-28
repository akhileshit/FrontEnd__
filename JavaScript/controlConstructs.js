//20/11/24

// Simple if
console.log("Welcome to college!");
marks = 55
if(marks > 80) {
    console.log("Welcome to tech club!")
}
console.log("------------1");


// if-else
age = 12
if(age >= 18)
    console.log("Eligible for voting!");
else
    console.log("Not eligible for voting!");
console.log("------------2");


// Nested if-else
num = 1
if (num>0) {
    console.log("Positive");
    if (num%2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}
else {
    console.log("Negative");
}
console.log("------------3");


// else-if Ladder








console.log("==============");




// switch-case
month = 5
switch (month) {
    case 3:
    case 4:
    case 5:
    case 6: console.log("Summer");
    break;

    case 12:
    case 1:
    case 2: console.log("Winter");
    break;

    case 7:
    case 8: console.log("Monsoon");
    break;

    case 9:
    case 10:
    case 11: console.log("Spring");
    break;

}
console.log("==============");


// "for" Loop
for (i=1; i<=5; i++) {
    console.log("Hello World"+i);
}
console.log("------------4");


// "while" Loop
i = 1;
while (i <= 5) {
    console.log("Hello World"+i);
    i++
}
console.log("------------5");


// "do-while" Loop
i = 1
do {
    console.log("Hello World"+i)
    i++
}
while (i<=5)

console.log("------------6");

// for-each 
nums = [1, 3, 4, 10]
for (i of nums) {       // for-each for arrays
    console.log(i);
}
console.log("------------7");

stu = {        // for-each for objects
    name: "Sagar",
    age: 25,
    marks: 22
}
for (i in stu) {
    console.log(stu[i]);
}
console.log("==============");


// "break"
for (i=1; i<=5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); 
}
console.log("------------8");


// "continue"
for (i=1; i<=5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); 
}