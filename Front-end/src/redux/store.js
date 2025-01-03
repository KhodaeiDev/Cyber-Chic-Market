import { configureStore } from '@reduxjs/toolkit'
import productsslice  from './productslice'
import  authSlice  from './auth'

export const store = configureStore({
  reducer: {
    products : productsslice,
    authuser: authSlice
  },
})