import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid is the method which generates unique id for each todo item
// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

const initialState = {
  todos: [],
};

// function sayHellow() {
//   console.log("Hello World" + Math.random());
// }

export const todoSlice = createSlice({
  name: "todo", // Here name is the property but we can name it anything. It's just a string that uniquely
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload; // Set todos from action payload
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // nanoid is the method which generates unique id for each todo item
        text: action.payload, // action.payload is the data that we want to add in the state
      };
      state.todos.push(todo);
      //update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    }, // here we can give the refrence of function too.
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      //update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      //update local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { setTodos, addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
