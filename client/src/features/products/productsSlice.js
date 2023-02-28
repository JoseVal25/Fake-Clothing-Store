import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Actions
    getAllProducts: async (state, action) => {
      const apiInfo = await axios("http://localhost:3001/items");

      state.products = [...apiInfo.data];
    },
  },
});

export const { getAllProducts } = productsSlice.actions;
// Selectors
export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
