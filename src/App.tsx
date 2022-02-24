import React, { useContext } from "react";
import "./App.css";
import TodoContextProvider, { TodoContext } from "./ThemeContext";

const App = () => {
  const { todos, addTodo } = useContext(TodoContext);
  return (
    <div className="App">
      <TodoContextProvider>
        <div>
          <div>
            {todos.map((todo, i) => (
              <div key={i}>{todo}</div>
            ))}
          </div>
          <button onClick={() => addTodo("new todo")}>Add todo</button>
        </div>
      </TodoContextProvider>
    </div>
  );
};

export default App;
