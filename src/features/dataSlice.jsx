import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
const initialState = {
  todos: [],
};

/* `export const addTodo` is creating an asynchronous thunk action called "addTodo". This action is
using the `createAsyncThunk` function from the Redux Toolkit library to handle the asynchronous
logic of adding a new todo item to a Firebase database. */
export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  try {
    await addDoc(collection(db, "todos"), todo);
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export default dataSlice.reducer;
