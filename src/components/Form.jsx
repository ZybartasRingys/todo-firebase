import { FormControl, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector, useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { Box, Stack, Text, Circle, Button, Checkbox } from "@chakra-ui/react";
import { ReactComponent as Cross } from "../../public/icon-cross.svg";
import { addTodo, deleteAllTodos, deleteTodo } from "../features/dataSlice";

function Form() {
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
      userId: user.uid,
      completed,
    };

    dispatch(addTodo(todo));
    setTitle("");
  };

  const deleteAll = () => {
    dispatch(deleteAllTodos());
  };

  const deleteItem = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Box
      border="1px solid red"
      mt="-98px"
      width="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          borderRadius="5px"
          bgColor="#25273D"
          display="flex"
          alignItems="center"
          width="100%"
          pl="20px"
          border="2px solid yellow"
        >
          <Checkbox
            width="20px"
            height="20px"
            borderRadius="100%"
            color="white"
            border="1px grey solid"
            mr="14px"
          ></Checkbox>
          <Input
            width="100%"
            height="48px"
            mb="16px"
            type="text"
            bgColor="#25273D"
            border="none"
            outline="none"
            placeholder="Create a new Todo..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <Cross />
        </FormControl>
      </form>

      <Box
        width="88%"
        height="368px"
        borderRadius="5px"
        bg="#25273D"
        color="white"
      >
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <Box
              key={todo.id}
              width="100%"
              height="52px"
              borderBottom="1px solid #393A4B"
              color="white"
            >
              {todo.todo.title}
              <button onClick={() => deleteItem(todo.id)}>
                <Cross />
              </button>
            </Box>
          ))
        ) : (
          <p>no todos</p>
        )}

        <Box>
          {`${todos.length} items left`}
          {todos?.length > 0 && (
            <button onClick={deleteAll}>Clear completed</button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Form;
