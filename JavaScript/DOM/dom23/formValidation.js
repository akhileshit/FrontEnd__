
//FORM VALIDATION IN JS

// const signUp = document.getElementById('submit')
const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const un = username.value
    const mail = email.value
    const pwd = password.value
    console.log("Name: " + un)
    console.log("Email: " + mail)
    console.log("Password: " + pwd)
})
