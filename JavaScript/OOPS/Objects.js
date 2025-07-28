// 25/11/24

st = {                            
    //states
    roll: 101,
    name: "akhil",
    cgpa: 7.7,
    //behaviours
    study: function() {                   // Function Expression               // Crazy..
        console.log("Study to upskill.");
    },
    intro: function () {
        console.log("Roll:" + this.roll + " Name:" + this.name + " Cgpa:" + this.cgpa);
    }
}

console.log(st.name)
st.study();
st.intro();
console.log("==========");


// This type of Objects can't be inherited & has so many limitations
// So lets go to our class-objects concept

//=====================================================OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT===============================================

class Student {
    //Constructor
    constructor(roll, name, cgpa) {
        this.roll = roll;
        this.name = name;
        this.cgpa = cgpa;
    }
    //Behaviours
    study() {           // No need 'function' keyword
        console.log("Study to upskill.");
    }
    intro() {
        console.log("Roll:" + this.roll + " Name:" + this.name + " Cgpa:" + this.cgpa);
    }
}

st = new Student(101, "akhil", 7.8)
st.study();
st.intro();

