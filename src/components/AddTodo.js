import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { addTodo } from "../redux/todoList";

const AddTodo = () => {
  const { todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uniqid(),
        description: input,
      })
    );
    setInput("");
  };

  /*  useEffect(() => {
    console.log(todoList);
  }, [todoList]); */

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
