//02/12/24

//Synchronous behaviour
console.log("instruction 1")
console.log("instruction 2")
console.log("instruction 3")


//Asynchronous behaviour (only in JavaScript)
console.log("Instruction 1")
setTimeout(function() {    // HOF                           //It looks like multitasking. But uses 'event-loop' & 'callback-queue' behind the scenes.
    console.log("Hello")
}, 3000);
console.log("Instruction 3")


// JS just sees the setTimeout word & time(ms) and move to the next statement!
// Hence all the async statements(setTimeout(,)) written one after the other with "same time" will all acts like Asysncronously. all statements executes at the same "time"!!
// This is solved using nesting async functions..


// Use Asynchronous & Synchronous behaviour of JS as in when Needed.
