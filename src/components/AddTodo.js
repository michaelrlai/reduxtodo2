import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { addTodo } from "../redux/todoList";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input === "") return;
    dispatch(
      addTodo({
        id: uniqid(),
        description: input,
      })
    );
    setInput("");
  };

  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button id="add" className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
