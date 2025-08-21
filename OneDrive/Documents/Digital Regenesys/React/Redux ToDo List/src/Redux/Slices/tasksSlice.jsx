import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'Tasks',
    initialState: {
        items: [],
        filter:'all'
    },
    reducers: {
        addTask: (state, action) => {
            state.items.unshift({ id: crypto.randomUUID(), text: action.payload, completed: false })
        },
        toggleTask: (state, action) => {
            const task = state.items.find(t => t.id == action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTask: (state, action) => {
            state.items = state.items.filter(t => t.id !== action.payload)
        },
        setFilter:(state,action)=>{
            state.filter=action.payload
        }
    }

})
export const { addTask, toggleTask, deleteTask, setFilter } = tasksSlice.actions
export default tasksSlice.reducer

