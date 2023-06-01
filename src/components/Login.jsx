import { useState } from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { useSelector } from 'react-redux'
import userSlice from '../features/userSlice'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signInCall } = useAuthentication()

  const user = useSelector((state) => state.user)
  console.log(user)

  const signIn = async () => {
    await signInCall(email, password)
  }

  return (
    <>
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
