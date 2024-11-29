import { configureStore } from '@reduxjs/toolkit'
import { productsslice } from './productslice'

export const store = configureStore({
  reducer: {
    products : productsslice.reducer
  },
})