import React, { useEffect, useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector, useDispatch } from 'react-redux'
import Form from './Form'
import { fetchTodos } from '../features/dataSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ userSlice }) => userSlice.user)
  const { logoutCall } = useAuthentication()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <section>
      <Form />
      {user?.email ? user.email : <p>Hi login to add todo</p>}
      <button onClick={logoutCall}>Logout</button>
    </section>
  )
}

export default HomePage
