import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector, useDispatch } from 'react-redux'
import { TiDeleteOutline } from 'react-icons/ti'
import Navbar from './Navbar'
import { Box, Stack, Text, Circle } from '@chakra-ui/react'

import {
  addTodo,
  fetchTodos,
  deleteAllTodos,
  deleteTodo,
} from '../features/dataSlice'

const HomePage = () => {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(({ userSlice }) => userSlice.user)
  const todos = useSelector((state) => state.dataSlice.todos)
  const { logoutCall } = useAuthentication()

  const handleSubmit = (e) => {
    e.preventDefault()
    let todo = {
      title,
      userId: user.uid,
      completed,
    }

    dispatch(addTodo(todo))
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const deleteItem = (id) => {
    dispatch(deleteTodo(id))
  }
  const deleteAll = () => {
    dispatch(deleteAllTodos())
  }

  return (
    <section>
      {user?.email ? user.email : <p>Hi login to add todo</p>}
      <button onClick={logoutCall}>Logout</button>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type='submit'>Add new todo</button>
      </form>
      <div>
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.todo.title}
              <button onClick={() => deleteItem(todo.id)}>
                {' '}
                <TiDeleteOutline />
              </button>
            </div>
          ))
        ) : (
          <p>no todos</p>
        )}

        {todos?.length > 1 && (
          <button onClick={deleteAll}>Clear completed</button>
        )}
      </div>
    </section>
  )
}

export default HomePage
