import React from "react";
import "./App.css";
import Child from "./Child";
import { UserContext } from "./Context";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{ name: "clove", email: "clove@gmail.com" }}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

export default App;
