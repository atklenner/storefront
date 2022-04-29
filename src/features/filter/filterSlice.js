import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "cart",
  initialState: {
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: "price-lowest",
    filters: {
      text: "",
      company: "all",
      category: "all",
      color: "all",
      min_price: 0,
      max_price: 0,
      price: 0,
      shipping: false,
    },
  },
  reducers: {},
});

export const {} = filterSlice.actions;

export default filterSlice.reducer;
