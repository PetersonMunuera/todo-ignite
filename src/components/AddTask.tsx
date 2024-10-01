import { PlusCircle } from '@phosphor-icons/react'
import styles from './AddTask.module.css'

export function AddTask() {
  return (
    <form className={styles.container}>
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />

      <button className={styles.button}>
        <span>Criar</span>
        <PlusCircle size={20} />
      </button>
    </form>
  )
}