import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import db from '../config/firebase'
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

//add todo to database
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

// Fetch data from databse
export const fetchTodos = createAsyncThunk('fetch/todos', async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'))
    const todosItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      todo: doc.data(),
    }))

    return todosItems
  } catch (error) {
    console.log(error)
  }
})

// Delete todo from db

export const deleteTodo = createAsyncThunk('delete/deleteTodos', async (id) => {
  try {
    const todos = await getDocs(collection(db, 'todos'))
    for (let todo of todos.docs) {
      if (todo.id === id) {
        await deleteDoc(doc(db, 'todos', todo.id))
      }
    }
    console.log(todos)

    return id
  } catch (error) {
    console.log(error)
  }
})

//delete all todos

export const deleteAllTodos = createAsyncThunk(
  'delete/deleteAllTodos',
  async () => {
    try {
      const todos = await getDocs(collection(db, 'todos'))
      for (var todo of todos.docs) {
        if (todo.id === id) {
          await deleteDoc(doc(db, 'todos', todo.id))
        }
      }
      return []
    } catch (error) {
      console.log(error)
    }
  }
)

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
        state.todos = action.payload
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      })
      .addCase(deleteAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload
      })
  },
})

export default dataSlice.reducer
