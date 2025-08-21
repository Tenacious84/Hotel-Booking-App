import React from 'react'
import './TaskList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleTask } from '../Redux/Slices/tasksSlice';

function TaskList() {
    const tasks = useSelector((state) => state.items);
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    console.log(tasks)



    return (
        <div>
            <div className="filterContainer">
                <button>All</button>
                <button> Completed </button>
                <button>Pending</button>
            </div>
            {
                tasks.map((e, i) => (
                    <div className="taskContainer">
                        <h2>{e.text}</h2>
                        <div className="accessories">
                            <div>{e.completed ? <input type="checkbox" checked className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} /> : <input type="checkbox" className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} />}
                                <p>{e.completed ? 'Task Complete' : 'Task incomplete'}</p></div>
                            <div> <button className="deleteButton" onClick={() => dispatch(deleteTask(e.id))}>🚮</button></div>
                        </div>


                    </div>
                )
                )}


        </div>
    )
}

export default TaskList