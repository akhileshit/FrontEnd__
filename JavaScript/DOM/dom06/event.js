//28/11/24


//KEY PRESSED EVENT
// document.addEventListener('keydown', (event) => {            //'keydown'
//     alert(`key pressed: ${event.key}`);
// });


//KEY RELEASED EVENT
// document.addEventListener('keyup', (event) => {           //'keyup'
//     alert(`key released: ${event.key}`)
// })



// document.addEventListener('DOMContentLoaded', () => {            // 'DOMContentLoaded'           //every time page reloads.
//     alert("DOM fully loaded and parsed.")
// })

// window.addEventListener('resize', () => {            //'resize'                     //document. won't work
//     alert("Window resized.")
// })

// window.addEventListener('scroll', () => {                     //'scroll'
//     alert("User is scrolling!")
// })



// document.querySelector('#myForm').addEventListener('submit', (event) => {          // 'submit'
//     event.preventDefault();  //prevents refreshing after submit
//     alert("Form submitted!")
// })



// document.querySelector('#myInput').addEventListener('input', (event) => {            //'input'
//     console.log("Typed " + event.target.value)
// })



document.querySelector("#myInput").addEventListener("change", (event) => {
    console.log("Input changed to: " + event.target.value )
})




// ///ly we have  for 'focus', 'blur'......many more........

