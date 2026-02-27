import { createSlice } from "@reduxjs/toolkit";
import {products} from "../../index";

const initialState = {
  products: products,
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export default productsSlice.reducer;
export const { addToCart } = productsSlice.actions;
