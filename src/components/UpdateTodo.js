import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../redux/todoList";

const UpdateTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  const [input, setInput] = useState(todo.description);

  const handleSubmit = (e) => {
    dispatch(
      updateTodo({
        id: todo.id,
        description: input,
      })
    );
    e.stopPropagation();
  };

  console.log(todoList);

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.id}`}
      >
        Update
      </button>

      <div
        className="modal"
        id={`id${todo.id}`}
        onClick={() => setInput(todo.description)}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Todo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setInput(todo.description)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setInput(todo.description)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTodo;
