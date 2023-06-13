import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    // eslint-disable-next-line no-unused-vars
    logout: (state, action) => {
      state.user = {}
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
