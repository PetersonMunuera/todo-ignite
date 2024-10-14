import { CheckCircle, Circle, Trash } from '@phosphor-icons/react'
import { TaskType } from '../App'

import clipboardImg from '../assets/clipboard.svg'
import styles from './TasksList.module.css'

interface TasksListProps {
  tasks: Array<TaskType>,
  onRemoveTask: (taskToRemove: string) => void
  onToggleTaskIsDone: (taskToToggle: string) => void
}

export function TasksList({ 
  tasks, 
  onRemoveTask, 
  onToggleTaskIsDone 
}: TasksListProps) {

  const tasksDoneNumber = tasks.filter(task => task.isDone).length

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>{tasks.length ? `${tasksDoneNumber} de ${tasks.length}` : 0}</span>
        </div>
      </header>

      {tasks.length ? (
        <ul className={styles.list}>
          {tasks.map(task => {
            return (
              <li 
                key={task.text} 
                className={`${styles.taskItem} ${task.isDone && styles.isDone}`}
              >
                <button 
                  className={styles.checkButton} 
                  onClick={() => onToggleTaskIsDone(task.text)}
                >
                  {
                    !task.isDone
                      ? <Circle size={20} />
                      : <CheckCircle size={20} weight="fill" />
                  }
                </button>
                <span>{task.text}</span>
                <button
                  onClick={() => onRemoveTask(task.text)}
                  className={styles.removeButton}
                >
                  <Trash size={20} />
                </button>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className={styles.emptyList}>
          <img src={clipboardImg} alt="Lista vazia" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </main>
  )
}