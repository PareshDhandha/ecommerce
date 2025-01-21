import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface wishlist {
    id: string,
    title: string,
    image: string,
    price: number,
}
const initialState: wishlist[] = []
const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<wishlist>) {
            let tempData = -1;
            state.map((item: any, index: any) => {
                if (item.id == action.payload.id) {
                    tempData = index
                }
            });
            if (tempData == -1) {
                state.push(action.payload)
            }
        },
        removeFromWishlist(state, action: PayloadAction<wishlist>) {
            return (state = state.filter((item: any) => item.id !== action.payload))
        }
    }
})

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions;
export const selectWishlist = (state: RootState) => state.wish;
export default WishlistSlice.reducer