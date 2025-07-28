// POLYMORPHISM IN JS

class Animal {
    sleep() {
        console.log("Animal is sleeping.")
    }
    move() {
        console.log("Animal is Walking.")
    }
    eat() {
        console.log("Animal is eating.")
    }
}

class Dog extends Animal {
    eat() {
        console.log("Dog is eating.")
    }
}

class Tiger extends Animal {
    eat() {
        console.log("Tiger is eating.")
    }
}

class Elephant extends Animal {
    eat() {
        console.log("Elephant is eating.")
    }
}


// POLYMORPHISM
function accessAnimals(an) {
    an.sleep()
    an.move()
    an.eat()
}

const d = new Dog()
accessAnimals(d)

const t = new Tiger()
accessAnimals(t)

const e = new Elephant()
accessAnimals(e)