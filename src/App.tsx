import { useState } from 'react'

import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksList } from './components/TasksList'

import './global.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  function addTask(task: string) {
    const newTasks = [...tasks]
    newTasks.push(task)

    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <AddTask onAddTask={addTask} />
      <TasksList tasks={tasks} />
    </>
  )
}

export default App
