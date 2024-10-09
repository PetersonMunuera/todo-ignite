import { Circle, Trash } from '@phosphor-icons/react'

import styles from './TasksList.module.css'

interface TasksListProps {
  tasks: Array<string>,
  onRemoveTask: (taskToRemove: string) => void
}

export function TasksList({ tasks, onRemoveTask }: TasksListProps) {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>5</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>2 de 5</span>
        </div>
      </header>

      <ul className={styles.list}>
        {tasks.map(task => {
          return (
            <li key={task} className={styles.taskItem}>
              <Circle size={20} color='#4EA8DE' />
              <span>{task}</span>
              <button 
                onClick={() => onRemoveTask(task)} 
                className={styles.removeButton}
              >
                <Trash size={20} />
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}