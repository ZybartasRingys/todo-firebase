import { useState } from "react";

import useAuthentication from "../hooks/useAuthentication";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const { signUpCall } = useAuthentication();

  const signUp = async (e) => {
    e.preventDefault();
    if (password === conPassword) {
      await signUpCall(email, password);
      console.log("registered");
    } else {
      console.log("wrong pass");
    }
  };
  return (
    <>
      <form action="" onSubmit={signUp}>
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
        <input
          type="password"
          placeholder="confirmed password"
          onChange={(e) => setConPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
