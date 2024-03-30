import React, { useState } from 'react';
import { useTodoContext } from '../contexts/todoContext';

function TodoForm() {
    const [todoMessage, setTodoMessage] = useState('');
    const { addTodo } = useTodoContext(); //importing the custom hook

    const add = (e) => {    
        e.preventDefault();
        if (!todoMessage) return;
        addTodo({
            // id: Date.now(), since we have given the id in the TodoItem component it will take that instead of this one todo
            todoMessage: todoMessage,
            completed: false
        });
        setTodoMessage('');
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
