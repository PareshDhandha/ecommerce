import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import categorySlice from "./slice/CategorySlice";
import cartSlice from './slice/CartSlice';
import wishlistSlice from './slice/WishListSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        cart: cartSlice,
        wish: wishlistSlice,
    }
})