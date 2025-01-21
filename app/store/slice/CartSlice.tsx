import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface cart {
    id: string,
    title: string,
    image: string,
    price: number,
    qty: number
}
const initialState: cart[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<cart>) {
            let tempIndex = -1;
            state.map((item: any, index: any) => {
                if (item.id == action.payload.id) {
                    tempIndex = index;
                }
            });
            if (tempIndex == -1) {
                state.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.image,
                    price: action.payload.price,
                    qty: action.payload.qty + 1,
                });
            } else {
                state[tempIndex].qty = state[tempIndex].qty + 1;
            }
        },
        reduceItemToCart(state, action: PayloadAction<cart>) {
            // let tempData = state.data;

            // tempData.map(item => {
            //     if (item.id == action.payload.id) {
            //         item.qty = item.qty - 1;
            //     }
            // })
            // state.data = tempData;
        },
        removeItemToCart(state, action: PayloadAction<string>) {
            return (state = state.filter((item: any) => item.id !== action.payload)
            )
            // let tempData = state;

            // tempData.slice(action.payload, 1);

            // state = tempData;
        },
        emptyCart(state, action) {
            state = [];
        },
    },
});

export const { addItemToCart, reduceItemToCart, removeItemToCart, emptyCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;