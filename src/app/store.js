import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/dailyTodos/todoSlice";

export default configureStore({
  reducer: {
    demy: todoReducer,
  },
});
