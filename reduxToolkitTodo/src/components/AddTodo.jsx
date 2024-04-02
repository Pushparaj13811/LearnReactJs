import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({ text, id }) {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        if (text) {
            setInput(text)
        }
    }, [text])


    const addTodoHandler = (e) => {
        e.preventDefault()
        if (id) {
            dispatch(updateTodo({ id, text: input }))
        } else {
            dispatch(addTodo(input))
        }
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12" >
            <input
                type="text"
                placeholder="Add todo..."
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                {id ? 'Update Todo ' : 'Add Todo'}
            </button>
        </form>
    )
}

export default AddTodo
