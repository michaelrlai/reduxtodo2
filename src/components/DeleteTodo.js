import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoList";

const DeleteTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(deleteTodo(todo));
  };

  return (
    <button className="btn btn-danger" onClick={handleSubmit}>
      Delete
    </button>
  );
};

export default DeleteTodo;
