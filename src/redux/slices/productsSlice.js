import { createSlice } from '@reduxjs/toolkit'

const initialState =  [];


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     state.push(action.payload)
    },
    removeFromCart: (state, action) => {
        return state.filter((product) => product.id !== action.payload.id)
        }
    
  },
})

export const { addToCart, removeFromCart } = productsSlice.actions

export default productsSlice.reducer