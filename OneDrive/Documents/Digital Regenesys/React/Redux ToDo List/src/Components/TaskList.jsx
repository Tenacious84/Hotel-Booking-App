import React from 'react'
import './TaskList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleTask, setFilter } from '../Redux/Slices/tasksSlice';

function TaskList() {
    const tasks = useSelector((state) => state.items);
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    console.log(tasks)



    return (
        <div>
            <div className="filterContainer">
                <button style={{ background: filter === 'all' ? "blue" : "", color: filter === 'all' ? "white" : "black" }} onClick={() => dispatch(setFilter('all'))}>All</button>
                <button style={{ background: filter === 'completed' ? "blue" : "", color: filter === 'completed' ? "white" : "black" }} onClick={() => dispatch(setFilter('completed'))}> Completed </button>
                <button style={{ background: filter === 'pending' ? "blue" : "", color: filter === 'pending' ? "white" : "black" }} onClick={() => dispatch(setFilter('pending'))}>Pending</button>
            </div>
            {filter === 'all' ? tasks.map((e, i) => (
                <div className="taskContainer" key={e.id}>
                    <h2>{e.text}</h2>
                    <div className="accessories">
                        <div>{e.completed ? <input type="checkbox" checked className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} /> : <input type="checkbox" className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} />}
                            <p>{e.completed ? 'Task Complete' : 'Task incomplete'}</p></div>
                        <div> <button className="deleteButton" onClick={() => dispatch(deleteTask(e.id))}>🚮</button></div>
                    </div>


                </div>
            )
            ) : [null]
            },
            {filter === 'completed' ? tasks.map((e, i) => (
                e.completed === true ?
                    <div className="taskContainer" key={e.id}>
                        <h2>{e.text}</h2>
                        <div className="accessories">
                            <div>{e.completed ? <input type="checkbox" checked className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} /> : <input type="checkbox" className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} />}
                                <p>{e.completed ? 'Task Complete' : 'Task incomplete'}</p></div>
                            <div> <button className="deleteButton" onClick={() => dispatch(deleteTask(e.id))}>🚮</button></div>
                        </div>


                    </div> : [null]
            )
            ) : [null]},
            {filter === 'pending' ? tasks.map((e, i) => (
                e.completed === false ?
                    <div className="taskContainer" key={e.id}>
                        <h2>{e.text}</h2>
                        <div className="accessories">
                            <div>{e.completed ? <input type="checkbox" checked className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} /> : <input type="checkbox" className='checkbox' value={e.completed} onChange={() => dispatch(toggleTask(e.id))} />}
                                <p>{e.completed ? 'Task Complete' : 'Task incomplete'}</p></div>
                            <div> <button className="deleteButton" onClick={() => dispatch(deleteTask(e.id))}>🚮</button></div>
                        </div>


                    </div> : [null]
            )
            ) : [null]}


        </div>
    )
}

export default TaskList