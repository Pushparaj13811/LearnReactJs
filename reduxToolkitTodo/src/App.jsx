import { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos'

function App() {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <div>
        <Todos />
      </div>
    </>
  )
}

export default App
