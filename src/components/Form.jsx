import { FormControl, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector, useDispatch } from 'react-redux'
import { TiDeleteOutline } from 'react-icons/ti'
import { Box, Stack, Text, Circle } from '@chakra-ui/react'

import {
  addTodo,
  fetchTodos,
  deleteAllTodos,
  deleteTodo,
} from '../features/dataSlice'

function Form() {
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

  const deleteAll = () => {
    dispatch(deleteAllTodos())
  }

  const deleteItem = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <FormControl onSubmit={handleSubmit}>
        <Input type='email' placeholder='Create a new Todo...' />
        <button type='submit'>Add new todo</button>
      </FormControl>

      <Box>
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.todo.title}
              <button onClick={() => deleteItem(todo.id)}>
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
      </Box>
    </>
  )
}

export default Form
