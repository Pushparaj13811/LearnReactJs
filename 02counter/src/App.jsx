import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  let [message, setMessage] = useState('')

  const addValue = () => {
    if (counter < 20) {
      setMessage(' ')
      setCounter(counter + 1) // here we can't pass counter++. It will create a problem  in the next render cycle.
    } else {
      message = `You can't  add more than : `
      setMessage(message)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setMessage(' ')
      setCounter(counter - 1) // here we can't pass counter--. It will create a problem  in the next render cycle.
    } else {
      message = `You can't go beyond : `
      setMessage(message)
    }
  }
  return (
    <>
      <h1>Pushparaj Counter APP</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>{message}{counter}</p>
    </>
  )
}

export default App
