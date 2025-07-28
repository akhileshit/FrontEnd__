class Parent {
    constructor() {
        console.log("Parent Constructor.")
    }
}

class Child extends Parent{
    constructor() {
        super()                                 //if not written explicitly Error:"Must call" super constructor in derived class before accessing 'this' or returning from derived constructor
        console.log("Child Constructor.")
    }
}


c = new Child()

//Constructor-chaining happens here like java