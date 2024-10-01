import logoImg from '../assets/logo-todo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="ToDo List" />
    </header>
  )
}