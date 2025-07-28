
//JAVASCRIPT EVENTS
//kod title: Comprehensive guide to javascript events with addEventListener

// if u want even more clean html file w/o any JS code inside it (like attribute onclick()) , Use JS EVENT LISTENERS


//ADDING AND REMOVING 'CLASS' FROM TAG ATTRIBUTES
document.querySelector('#java').addEventListener('click', () => {  //adding event listeners to separate id's
    j = document.querySelector("#java")
    j.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
});

document.querySelector('#python').addEventListener('click', () => {
    p = document.querySelector("#python")
    p.classList.add("active")

    j = document.querySelector("#java");
    j.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
});

document.querySelector('#cplus').addEventListener('click', () => {
    c = document.querySelector("#cplus")
    c.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    j = document.querySelector("#java")
    j.classList.remove("active")
    g = document.querySelector("#go")
    g.classList.remove("active")
});

document.querySelector('#go').addEventListener('click', () => {
    g = document.querySelector("#go")
    g.classList.add("active")

    p = document.querySelector("#python");
    p.classList.remove("active")
    c = document.querySelector("#cplus")
    c.classList.remove("active")
    j = document.querySelector("#java")
    j.classList.remove("active")
});


