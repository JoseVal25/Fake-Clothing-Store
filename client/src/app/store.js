import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/items/basketSlice.js";

export const store = configureStore({
  reducer: {
    items: basketReducer,
  },
});
