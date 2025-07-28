function display(data) { // "Callback Funtion" 
    console.log("Data: " + data)
}

function add(a, b, show) { // "Higher Order Function" (a function which uses another function as its parameter! or returns a fuction!!)
    res = a + b
    show(res)
}

add(2, 50, display)



function accept_name(name, show) {
    show(name)
}

accept_name("akhil", display)