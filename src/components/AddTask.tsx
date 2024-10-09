import { useState, ChangeEvent, FormEvent } from 'react'

import { PlusCircle } from '@phosphor-icons/react'
import styles from './AddTask.module.css'

interface AddTaskProps {
  onAddTask: (task: string) => void
}

export function AddTask({ onAddTask }: AddTaskProps) {
  const [taskInput, setTaskInput] = useState("")

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
    const task = event.target.value
    setTaskInput(task)
  }

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!taskInput) return

    onAddTask(taskInput)

    setTaskInput("")
  }

  return (
    <form onSubmit={handleAddTask} className={styles.container}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={handleTaskInput}
        value={taskInput}
      />

      <button className={styles.button} disabled={!taskInput}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}