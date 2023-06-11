import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  fetchTodos,
  deleteAllTodos,
  deleteTodo,
} from "../features/dataSlice";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(({ userSlice }) => userSlice.user);
  const todos = useSelector((state) => state.dataSlice.todos);

  const { logoutCall } = useAuthentication();

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      title,
      completed,
    };

    dispatch(addTodo(todo));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };
  const deleteAll = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <div>
      HomePage
      <p>hello {user ? user.email : <p>you need to Login</p>}</p>
      <Register />
      <button onClick={logoutCall}>Logout</button>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add new todo</button>
      </form>
      <div>
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id}>
              {todo.todo.title}
              <button onClick={() => deleteItem(todo.id)}> delete todo</button>
            </div>
          ))
        ) : (
          <p>no todos</p>
        )}

        {todos?.length > 1 && (
          <button onClick={deleteAll}>Clear completed</button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
