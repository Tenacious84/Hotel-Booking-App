import React from 'react'
import { useState } from 'react'
import { toggleTask, addTask, deleteTask } from '../Redux/Slices/tasksSlice'
import { useSelector,useDispatch } from 'react-redux'
import './TaskInput.css'

function TaskInput() {
    const [task, setTask] = useState('')
   const dispatch=useDispatch()
   const tasks=useSelector((state)=>state.items)

   function handleAdd(){
    dispatch( addTask(task))
    setTask('')
   }
  

    return (
        <div>
            <input className='inputContainer' type="text" placeholder='Add a task 🗓️...' value={task} onChange={(e) => setTask(e.target.value)} />
            <button className='addButton' onClick={() =>handleAdd()}>➕</button>
           
        </div>
    )
}

export default TaskInput