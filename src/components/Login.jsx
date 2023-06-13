import { useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector } from 'react-redux'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(({ userSlice }) => userSlice.user)
  const { signInCall } = useAuthentication()

  const signIn = async () => {
    await signInCall(email, password)
  }

  return (
    <>
      <h1>login</h1>
      <input
        type='text'
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signIn}>signIn</button>
    </>
  )
}

export default Login
