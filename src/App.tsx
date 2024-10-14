import { useState } from 'react'

import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksList } from './components/TasksList'

import './global.css'

export interface TaskType {
  text: string,
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function addTask(taskText: string) {
    const newTasks = [...tasks]
    
    newTasks.push({
      text: taskText,
      isDone: false
    })

    setTasks(newTasks)
  }

  function removeTask(taskToRemove: string) {
    const newTasks = tasks.filter(task => task.text != taskToRemove)

    setTasks(newTasks)
  }

  function toggleTaskIsDone(taskToToggle: string) {
    const newTasks = [...tasks]

    newTasks.forEach(task => {
      if (task.text === taskToToggle) task.isDone = !task.isDone
    })

    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <AddTask onAddTask={addTask} />
      <TasksList 
        tasks={tasks} 
        onRemoveTask={removeTask} 
        onToggleTaskIsDone={toggleTaskIsDone} 
      />
    </>
  )
}

export default App
