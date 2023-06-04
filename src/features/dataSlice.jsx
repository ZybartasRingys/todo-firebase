import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
      console.log(state.todos);
    },
    create: (state, action) => {},
    update: (state, action) => {},
    delete: (state, action) => {},
  },
});

export const { getTodos } = dataSlice.actions;
export default dataSlice.reducer;
