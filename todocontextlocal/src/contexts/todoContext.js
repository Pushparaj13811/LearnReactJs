import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {}
  ],
  addTodo: (todoMessage) => {},
  updateTodo: (id, todoMessage) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
