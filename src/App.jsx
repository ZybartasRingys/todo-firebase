import Register from './components/Register'
import Login from './components/Login'

import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  return (
    <>
      <p>hello</p>
      <Register />

      {user ? user.email : <p>please login</p>}

      {user ? <button onClick={dispatch(logout())}>Logout</button> : <Login />}
    </>
  )
}

export default App
