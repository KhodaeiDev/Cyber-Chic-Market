import { createSlice } from "@reduxjs/toolkit";

export const productsslice = createSlice({
 name: "products",
 initialState: {
  products: [],
  categorys: [],
 },
 reducers: {
     setCategorys:(state,action)=>{
          state.categorys = action.payload
     },
     setProducts:(state,action)=>{
          state.products = action.payload
     },
 },
});

export const { setCategorys,setProducts } = productsslice.actions

export default productsslice.reducer