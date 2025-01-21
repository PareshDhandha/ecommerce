import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slice/ProductSlice";
import categorySlice from "./slice/CategorySlice";
import cartSlice from './slice/CartSlice';
import wishlistSlice from './slice/WishListSlice'
import AddressSlice from './slice/AddressSlice';
import ProfileSlice from './slice/ProfileSlice';

export const store = configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice,
        cart: cartSlice,
        wish: wishlistSlice,
        address: AddressSlice,
        profile: ProfileSlice,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>