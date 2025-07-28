//Assignment:  take 2 numbers input from the user and show the sum 

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const addButton = document.getElementById('addButton')

addButton.addEventListener('click', () => {
    const body = document.querySelector('body')
    const prevResult = document.querySelector('.result')
    if (prevResult !== null) { // Removing previous sum result if present!
        body.removeChild(prevResult)
    }
    const newDiv = document.createElement('div')
    newDiv.classList.add('result')
    const heading = document.createElement('h3')
    heading.textContent = `Sum is ${parseInt(num1.value) + parseInt(num2.value)}`;
    newDiv.appendChild(heading)
    body.appendChild(newDiv)   // Must append to the existing element (here: body)
    
    console.log(`Sum is ${parseInt(num1.value) + parseInt(num2.value)}`)
})





//End