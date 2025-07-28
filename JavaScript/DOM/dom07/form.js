document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form Submitted!')

    em = document.querySelector('#email').value 
    pw = document.querySelector('#password').value

    console.log("Your Email: " + em)  //go look in the console
    console.log("Your Password: " + pw);
    
    alert("Your Email: " + em)
})