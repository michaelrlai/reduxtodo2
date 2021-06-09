import React from "react";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";
import "./style.css";

function App() {
  return (
    <div className="container col-sm-8 mt-3">
      <h1 className="text-center">Redux Todo</h1>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
