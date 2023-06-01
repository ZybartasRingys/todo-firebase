import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {},
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload
      console.log(action.payload.email)
    },
    // eslint-disable-next-line no-unused-vars
    logout: (state, action) => {
      state.user = {}
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
