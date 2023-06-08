import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../features/dataSlice'
import { fetchTodos } from '../features/dataSlice'

const HomePage = () => {
  const [title, setTitle] = useState('')
  const [completed, setCompleted] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(({ userSlice }) => userSlice.user)
  const todos = useSelector((state) => state.dataSlice.todos)

  const { logoutCall } = useAuthentication()

  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault()
    let todo = {
      title,
      completed,
    }

    dispatch(addTodo(todo))
  }

  const fetch = () => {
    fetchTodos()
  }

  return (
    <div>
      HomePage
      <p>hello {user ? user.email : <p>you need to Login</p>}</p>
      <Register />
      <Login />
      <button onClick={logoutCall}>Logout</button>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type='submit'>Add todo</button>
        <button onClick={fetch}>Fetch todos</button>

        {todos.length > 0 ? todos.map((todo) => todo.title) : <p>no todos</p>}
      </form>
    </div>
  )
}

export default HomePage
