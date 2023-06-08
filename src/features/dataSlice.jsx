import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import db from '../config/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

/* `export const addTodo` is creating an asynchronous thunk action called "addTodo". This action is
using the `createAsyncThunk` function from the Redux Toolkit library to handle the asynchronous
logic of adding a new todo item to a Firebase database. */
export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  try {
    const addTodoRef = await addDoc(collection(db, 'todos'), todo)
    const newTodo = { id: addTodoRef.id, todo }
    console.log('todo added')
    return newTodo
  } catch (error) {
    console.log(error)
  }
})

/* `export const fetchTodos` is creating an asynchronous thunk action called "fetchTodos". This action
is using the `createAsyncThunk` function from the Redux Toolkit library to handle the asynchronous
logic of fetching all todo items from a Firebase database. */
export const fetchTodos = createAsyncThunk('fetch/todos', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'))
    const todosItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      todo: doc.data(),
    }))
    console.log('fetched')
    console.log(todosItems)
    return todosItems
  } catch (error) {
    console.log(error)
  }
})

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    todos: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.fulfilled, (state, action) => {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        }
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        }
      })
  },
})

export default dataSlice.reducer
