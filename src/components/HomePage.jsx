import React, { useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import useGetTodos from "../hooks/useGetTodos";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector } from "react-redux";
import dataSlice from "../features/dataSlice";

const HomePage = () => {
  const user = useSelector(({ userSlice }) => userSlice.user);
  const todos = useSelector(({ dataSlice }) => dataSlice.todos);
  const { fetchTodos } = useGetTodos();
  const { logoutCall } = useAuthentication();

  return (
    <div>
      HomePage
      <p>hello {user ? user.email : <p>you need to Login</p>}</p>
      <Register />
      <Login />
      <button onClick={logoutCall}>Logout</button>
      <button onClick={fetchTodos}>Fetch todos</button>
      {todos.map((todo) => todo.title)}
    </div>
  );
};

export default HomePage;
