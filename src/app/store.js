import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import productsReducer from "../features/products/productsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    filter: filterReducer,
  },
});
