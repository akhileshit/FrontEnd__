// INHERITANCE IN JS

class ElectronicDevice {
    getCharged() {
        console.log("Plug in to charge.");
    }

    use() {
        console.log("Use for making work easier.");
    }
}

//Inheritance
class Laptop extends ElectronicDevice {
    //method Overriding
    use() {
        console.log("Use laptop for calculations and more.");
    }
    //Child-specific method
    openBrowser() {
        console.log("Use browser to search on the internet."); 
    }
}


l = new Laptop()
l.getCharged();
l.use();
l.openBrowser();