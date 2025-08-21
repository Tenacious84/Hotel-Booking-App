import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Redux/Slices/tasksSlice'

const taskStore = configureStore({
      reducer: taskReducer
})

export default taskStore;