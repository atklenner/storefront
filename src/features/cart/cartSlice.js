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
    addToCart: (state, action) => {
      const { id, color, amount, product } = action.payload;
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      state.cart.push(newItem);
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    changeAmount: (state, action) => {
      const { id, value } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (value === "inc") {
        let newAmount = item.amount + 1;
        if (newAmount > item.max) {
          newAmount = item.max;
        }
        item.amount = newAmount;
      }
      if (value === "dec") {
        let newAmount = item.amount - 1;
        if (newAmount < 1) {
          newAmount = 1;
        }
        item.amount = newAmount;
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    countTotalItems: (state) => {},
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
