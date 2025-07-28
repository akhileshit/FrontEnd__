//27/11/24
function addRec() {
    b = document.querySelector("body")
    rec = document.createElement("div")
    rec.style.border = "5px solid black"
    rec.style.width = "100px"
    rec.style.height = "100px"
    rec.style.margin = "10px";
    b.appendChild(rec)
}

function removeRec() {
    b = document.querySelector("body")
    rec = b.querySelector("div")
    b.removeChild(rec)
}


// use document. / windows. (to select any child elements in browser).
// But in some cases you have to use windows. (like 'resizing' reactions (event listeners). studied later.)