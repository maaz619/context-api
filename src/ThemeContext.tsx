import React, { useContext, createContext } from "react";

type TodoContextType = {
  todos: string[];
  addTodo: (name: string) => void;
};

const contextDefaultValue: TodoContextType = {
  todos: [],
  addTodo: () => {},
};
export const TodoContext = createContext<TodoContextType>(contextDefaultValue);

export const useTodo = () => useContext(TodoContext);

const TodoContextProvider: React.FC = ({ children }) => {
  const [todos, setTodo] = React.useState<string[]>(contextDefaultValue.todos);

  const addTodo = (newTodo: string) => setTodo((todos) => [...todos, newTodo]);
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
