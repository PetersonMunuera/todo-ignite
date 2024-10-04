import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TasksList } from './components/TasksList'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <AddTask />
      <TasksList />
    </>
  )
}

export default App
