import React, { useEffect, useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import { fetchTodos } from "../features/dataSlice";
import { Box } from "@chakra-ui/react";
const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ userSlice }) => userSlice.user);
  const { logoutCall } = useAuthentication();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Form />
      {user?.email ? user.email : <p>Hi login to add todo</p>}
      <button onClick={logoutCall}>Logout</button>
    </Box>
  );
};

export default HomePage;
