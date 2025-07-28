// Assignment: To do list
// function addTask() {
//     inputText = document.querySelector(".inputText")
//     getInputText = inputText.value
//     pending = document.querySelector(".pending")
//     newItem = document.createElement("div")
//     newItem.innerHTML = 
//     "<input type='text' class='getText' /input>   <button> Mark Complete </button>"
    
//     // newItem.classList.add()
//     pending.appendChild(newItem)
//     todo = document.querySelector(".getText")
//     todo.value = getInputText
    
// }

// function markComplete() {
//     inputText = document.querySelector(".getText")
//     complete = document.querySelector(".complete")
//     getText = inputText.innerHTML
//     complete.appendChild(getText)
    
// }



// const inputText = document.getElementById('inputText')
// const addButton = document.getElementById('addButton')
// const taskList = document.getElementById('taskList')
// const completedTasks = document.getElementById('completedTasks')

// addButton.addEventListener('click', (event) => {
//     const taskDiv = document.createElement('div')
//     taskDiv.classList.add('task')
//     const task = document.createElement('li')
//     task.textContent = inputText.value 
//     const markComplete = document.createElement('button')
//     markComplete.textContent = 'Mark Complete'
//     taskDiv.appendChild(task)
//     taskDiv.appendChild(markComplete)
//     taskList.append(taskDiv)
    
// })




const inputText = document.getElementById('inputText')
const addButton = document.getElementById('addButton')
const taskList = document.getElementById('taskList')
const completedTasks = document.getElementById('completedTasks')

addButton.addEventListener('click', () => {
    if (inputText.value !== "") {
        const pendTask = document.createElement('li')
        const taskInput = inputText.value
        pendTask.innerHTML = 
        `<span > ${taskInput} </span>
        <button class="markBtn"> Mark Completed </button> <br><br>
        `
        taskList.appendChild(pendTask)
        const markBtn = pendTask.querySelector('.markBtn')


        markBtn.addEventListener('click', () => {
            const complTask = document.createElement('li')
            complTask.innerHTML =
            `<span> ${taskInput} </span>
            <button class="delBtn"> Delete </button> <br><br>
            `
            completedTasks.appendChild(complTask)
            taskList.removeChild(pendTask)
            const delBtn = complTask.querySelector('.delBtn')


            delBtn.addEventListener('click', () => {
                completedTasks.removeChild(complTask)
            });
        });
    }

    inputText.value = ""
});




// End