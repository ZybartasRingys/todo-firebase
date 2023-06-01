import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector } from "react-redux";

import useAuthentication from "./hooks/useAuthentication";

function App() {
  const user = useSelector(({ userSlice }) => userSlice.user);
  console.log(user);
  const { logoutCall } = useAuthentication();

  return (
    <>
      <p>hello {user ? user.email : <p>you need to Login</p>}</p>
      <Register />
      <Login />

      <button onClick={logoutCall}>Logout</button>
    </>
  );
}

export default App;
