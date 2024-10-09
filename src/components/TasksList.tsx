import { Circle, Trash } from '@phosphor-icons/react'

import clipboardImg from '../assets/clipboard.svg'
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
          <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>{tasks.length ? `2 de ${tasks.length}` : 0}</span>
        </div>
      </header>

      {tasks.length ? (
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