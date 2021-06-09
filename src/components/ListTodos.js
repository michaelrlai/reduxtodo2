import React from "react";
import { useSelector } from "react-redux";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const ListTodos = () => {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <table className="table mt-3 align-middle">
      <thead>
        <tr>
          <th className="col-6 text-center" scope="col">
            Description
          </th>
          <th className="col-3 text-center" scope="col">
            Update
          </th>
          <th className="col-3 text-center" scope="col">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td className="text-center">
                <UpdateTodo todo={todo} />
              </td>
              <td className="text-center">
                <DeleteTodo todo={todo} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListTodos;
