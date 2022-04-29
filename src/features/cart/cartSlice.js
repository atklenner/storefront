import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
  },
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    changeAmount: (state, action) => {},
    emptyCart: (state) => {},
    countTotalItems: (state) => {},
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
