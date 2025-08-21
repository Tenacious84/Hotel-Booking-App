import { } from 'react'
import './App.css'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'

function App() {
  return (
    <div className='main-container'>
      <h2>@Tenacious</h2>
      <TaskInput />
      <TaskList />
    </div>
  )

}

export default App
