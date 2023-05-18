import { createSlice } from '@reduxjs/toolkit'

const initialState =  [];


export const productSlice = createSlice({
  name: 'product',
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

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer