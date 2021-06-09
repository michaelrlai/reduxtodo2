import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const todoList = createSlice({
  name: "todoList",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: action.payload.id,
        description: action.payload.description,
      });
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },
    updateTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.description = action.payload.description;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoList.actions;
export default todoList.reducer;
