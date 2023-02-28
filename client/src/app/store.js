import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/items/basketSlice.js";
import productsReducer from "../features/products/productsSlice.js";

export const store = configureStore({
  reducer: {
    items: basketReducer,
    product: productsReducer,
  },
});
