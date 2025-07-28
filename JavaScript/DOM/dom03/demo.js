
// function activate() {
//     const b = document.querySelector("button")
//     b.classList.add("active")
//     const active = document.querySelector(".active")
//     active.style.backgroundColor = "blue"
//     active.style.color = "white"
// }

//ADDING AND REMOVING 'CLASS' FROM TAG ATTRIBUTES
function java() {
    j = document.querySelector("#java")
    j.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
}
function python() {
    p = document.querySelector("#python")
    p.classList.add("active")

    j = document.querySelector("#java");
    j.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
}
function cplus() {
    c = document.querySelector("#cplus")
    c.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    j = document.querySelector("#java")
    j.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
}
function go() {
    g = document.querySelector("#go")
    g.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    j = document.querySelector("#java")
    j.classList.remove("active")
}

//Try to optimize this code (less code)