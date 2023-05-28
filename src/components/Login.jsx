import { useState } from "react";
import useAuthentication from "../hooks/useAuthentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInCall } = useAuthentication();

  const signIn = async (email, password) => {
    await signInCall(email, password);
  };

  return (
    <>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signIn}>signIn</button>
    </>
  );
}

export default Login;
