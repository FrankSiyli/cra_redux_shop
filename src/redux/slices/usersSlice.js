import { createSlice } from '@reduxjs/toolkit'

const initialState =  {
    value: {username: ""}
};


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state, action) => {
        state.value = action.payload
    },
    logout: (state, action) => {
        state.value = initialState
        }
    
  },
})

export const { login, logout } = usersSlice.actions

export default usersSlice.reducer