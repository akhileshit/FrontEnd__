//26/11/24
// const hh = document.querySelector('p');
// hh.innerText = "Query Selector Demo";


// document.getElementById("hey").innerHTML = "<h2>Query Selector Demo</h2>"
// heading.innerHTML 

// const headings = document.querySelectorAll('h1');
// headings.forEach((h) => console.log(h));


// All above not working here (working inside browser console (live))
//===========================================================

function darkMode() {
    const button = document.querySelector("button");
    const body = document.querySelector("body");
    
    if (button.textContent === "Activate Dark Mode") {
        body.style.color = "orange"
        body.style.backgroundColor = "black"
        button.textContent = "Activate Light Mode"
    }

    else {
        body.style.color = "black"
        body.style.backgroundColor = "white"
        button.textContent = "Activate Dark Mode"
    }
}




// querySelector & querySelectorAll are more than sufficient. Just know about it.

// JUST SELECT THE ELEMENT IN THE DOM TREE AND MANIPULATE THEM USING JS HOWEVER YOU WANT. DONE!