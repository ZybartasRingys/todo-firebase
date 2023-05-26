import React, { useState } from 'react'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      dispatch(
        login({
          email: email,
          password: password,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder='Email'
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
        required
      />

      <button onClick={signIn}>SignIn</button>
    </div>
  )
}

export default Login
