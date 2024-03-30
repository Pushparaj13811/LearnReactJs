import { useEffect, useState } from 'react';
import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {  
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...value },...prevTodo])
  }
  const updateTodo = (id, value) => {
    setTodos((prevTodo) => prevTodo.map((prev) => (
      prev.id === id ? value : prev)))
  }
  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prev) => prev.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prevTodo) => prevTodo.map((prev) => (
      prev.id === id ? { ...prev, completed: !prev.completed } : prev)))
  }


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
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#56571a] min-h-screen ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm /> 
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div  key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
