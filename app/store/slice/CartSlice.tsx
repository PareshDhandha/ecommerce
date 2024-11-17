import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItemToCart(state: any, action: any) {
            // const tempData = state.data.push({ ...payload})
            //     const existingItem = state.data.find((item) => item.id === tempData.id);
            //    if(existingItem){
            //     existingItem.quantity++;
            //     existingItem.totalPrice = existingItem.price * existingItem.quantity;
            //    }else{
            //     state.data.push(name:any ,price , totalPrice, id , quantity){
            //         name:action.payload.name,
            //         price: action.payload.price,
            //         totalPrice = action.payload.totalPrice,
            //         id: action.payload.id,
            //         quantity:1,
            //     });
            //    } 
            // const { id } = action.payload;
            // const find = state.data.find((item: any) => item.id === id)
            // if (find) {
            //     return state.data.map((item: any) =>
            //         item.id === id ? {
            //             ...item,
            //             quantity: item.quantity + 1
            //         } : item
            //     )
            // } else {
            //     state.data.push({
            //         ...action
            //         ,
            //         quantity: 1,
            //     })
            // }
            state.push(action.payload);
        },
        reduceItemToCart(state, action) {
            // let tempData = state.data;

            // tempData.map(item => {
            //     if (item.id == action.payload.id) {
            //         item.qty = item.qty - 1;
            //     }
            // })
            // state.data = tempData;
        },
        removeItemToCart(state, action) {
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

export default cartSlice.reducer;