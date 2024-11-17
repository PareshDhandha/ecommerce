import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addToWishlist(state: any, action: any) {
            state.push(action.payload)
        },
        removeFromWishlist(state: any, action: any) {
            return (state = state.filter((item: any) => item.id !== action.payload))
        }
    }
})

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer