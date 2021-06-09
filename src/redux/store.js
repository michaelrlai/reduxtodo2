import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoList";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
