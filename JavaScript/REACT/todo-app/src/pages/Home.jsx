import React, { useState } from 'react'
import editImg from '../assets/edit-icon.png'

export default function Home() {
  const [task, setTask] = useState('')
  const [tasklist, setTasklist] = useState({
    todo: [],
    ongoing: [],
    completed: []
  })

  const [editScreen, setEditScreen] = useState('')
  const [taskToEdit, setTaskToEdit] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [editedTask, setEditedTask] = useState('')

  const addTask = () => {
    if (task.trim() !== '') {
      setTasklist((prevTasklist) => ({
        ...prevTasklist,
        todo: [...prevTasklist.todo, task],
      })) // sets only todo by default
      setTask('') //Empty the input field after task is added to todo
      
    }
  }

  const moveTask = (currentCategory, targetCategory, taskToMove) => {
    setTasklist((prevTasklist) => {
      const updateCurrent = prevTasklist[currentCategory].filter(
        (t) => t !== taskToMove
      ) // removes that task from the current list 
      const updatedTarget = [...prevTasklist[targetCategory], taskToMove] // adds that task to new category
  
      return { ...prevTasklist, [currentCategory]: updateCurrent, [targetCategory]: updatedTarget } // returns the previous list with the updations
    })


  }

  const removeTask = (currentCategory, task) => { 
    setTasklist((prevTasklist) => {
      const removed = prevTasklist[currentCategory].filter(
        (t) => t !== task
      )
         
      return { ...prevTasklist, [currentCategory]: removed }
    })
  }

  const removeAll = (currentCategory) => {
    setTasklist((prevTasklist) => {
      const removed = []
      
      return { ...prevTasklist, [currentCategory]: removed}
    })
  }

  const editTask = (task, currentCategory) => {
    setEditScreen('1')
    setEditedTask(task)
    setTaskToEdit(task)
    setEditCategory(currentCategory)
  }


  const saveEdit = () => {
    setTasklist((prevTasklist) => {
      const taskIndex = prevTasklist[editCategory].indexOf(taskToEdit)
      prevTasklist[editCategory][taskIndex] = editedTask
      setEditScreen('')
      return {...prevTasklist, prevTasklist}
    })
  }

  return (
    <div className='form-container'>
      {editScreen && <div className="edit-screen">
        <div className="edit-task">
          <h2>Edit Task</h2>
          <input type="text" className='edit-input' value={editedTask} onChange={(e) => setEditedTask(e.target.value)}/>
          <button className="edit-cancel" onClick={() => setEditScreen('')}>Cancel</button>
          <button className="edit-save" onClick={saveEdit}>Save changes</button>
        </div>
      </div>}
      <form className='form-content' 
        onSubmit={(e) => {
          e.preventDefault()
          addTask()
        }} 
      >
        <input type='text' className='form-input' 
          placeholder='Enter task...' 
          
          value={task}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button className='form-button' onClick={addTask}>ADD TASK</button>
      </form>

      <div className="task-sections">
        <div className="task-section">
          <h2>
            To-Do Tasks
            <span className='section-tasks-count'>: {tasklist.todo.length}</span>
          </h2>
          <ul>
            {tasklist.todo.map((t, index) => (
              <li key={index} className='task-list'>
                <span className='task-name todo'>{t}</span>
                <img src={editImg} alt='edit' className="task-edit" onClick={() => editTask(t, 'todo')}/>
                <button className='task-button' onClick={() => moveTask('todo', 'ongoing', t)}>Ongoing</button>
                <button className='task-button' onClick={() => moveTask('todo', 'completed', t)}>Completed</button>
                <span className="remove-task" onClick={() => removeTask('todo', t)}>X</span>
              </li>
            ))}
          </ul>
          {tasklist.todo.length===0 && <span className='no-tasks' >No tasks yet</span>}
          {tasklist.todo.length!==0 && <button className='clear-all' onClick={() => removeAll('todo')}>Clear All</button>}
        </div>

        <div className="task-section">
          <h2>
            Ongoing Tasks
            <span className='section-tasks-count'>: {tasklist.ongoing.length}</span>
          </h2>
          <ul>
            {tasklist.ongoing.map((t, index) => (
              <li key={index} className='task-list'>
                <span className='task-name ongoing'>{t}</span>
                <img src={editImg} alt="edit" className='task-edit' onClick={() => editTask(t, 'ongoing')}/>
                <button className='task-button' onClick={() => moveTask('ongoing', 'todo', t)}>To-Do</button>
                <button className='task-button' onClick={() => moveTask('ongoing', 'completed', t)}>Completed</button>
                <span className="remove-task" onClick={() => removeTask('ongoing', t)}>X</span>
              </li>
            ))}
          </ul>
          {tasklist.ongoing.length===0 && <span className='no-tasks' >No tasks yet</span>}
          {tasklist.ongoing.length!==0 && <button className='clear-all' onClick={() => removeAll('ongoing')}>Clear All</button>}
        </div>

        <div className="task-section">
          <h2>
            Completed Tasks
            <span className='section-tasks-count'>: {tasklist.completed.length}</span>
          </h2>
          <ul>
            {tasklist.completed.map((t, index) => (
              <li key={index} className='task-list'>
                <span className='task-name completed'>{t}</span>
                <button className='task-button' onClick={() => moveTask('completed', 'todo', t)}>To-Do</button>
                <button className='task-button' onClick={() => moveTask('completed', 'ongoing', t)}>Ongoing</button>
                <span className='remove-task' onClick={() => removeTask('completed', t)}>X</span>
              </li>
            ))}
          </ul>
          {tasklist.completed.length===0 && <span className='no-tasks' >No tasks yet</span>}
          {tasklist.completed.length!==0 && <button className='clear-all' onClick={() => removeAll('completed')}>Clear All</button>}
        </div>
      </div>

    </div>
  )
}
