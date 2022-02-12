import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUriTodos = createAsyncThunk("getUriPost", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    throw error?.response?.message;
  }
});

const initialState = {
  isLoading: false,
  isError: null,
  posts: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        completed: false,
        id: Math.random() * 1000,
      };
      state.posts.push(newTodo);
    },
    addEdit: (state, action) => {
      const index = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[index].title = action.payload.title;
    },
    toggleEdit: (state, action) => {
      const index = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[index].toggle = action.payload.toggle;
    },
    toggleComplete: (state, action) => {
      const index = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[index].completed = action.payload.completed;
    },
    toggleUndo: (state, action) => {
      const index = state.posts.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.posts[index].completed = action.payload.completed;
    },
    toggleDelete: (state, action) => {
      state.posts = state.posts.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUriTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUriTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.isError = null;
      })
      .addCase(getUriTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      }),
});

export const {
  addTodo,
  addEdit,
  toggleEdit,
  toggleComplete,
  toggleUndo,
  toggleDelete,
} = todoSlice.actions;

export default todoSlice.reducer;
