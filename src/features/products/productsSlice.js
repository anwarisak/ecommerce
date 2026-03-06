import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../index";

const initialState = {
  products: products,
  cart: [],
  quantity: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    // Set exact quantity
    setItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },

    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },

    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  addToCart,
  setItemQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} = productsSlice.actions;
export default productsSlice.reducer;
