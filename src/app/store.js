import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../features/favoriteSlice";
import cartReducer from "../features/CartSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    cart: cartReducer
  }
});