import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface address {
    id: string,
    name: string,
    mobile: string,
    city: string,
    pincode: string,
    state: string
}

const initialState: address[] = []
const AddressSlice = createSlice({
    name: 'Address',
    initialState,
    reducers: {
        addAddress(state, action: PayloadAction<address>) {
            state.push(action.payload);
        },
        removeAddress(state: any, action) {
            // let indexofaddress = state.indexOf(action.payload)
            // state.slice(indexofaddress, 1)
            return (state = state.filter((item: any) => item.id !== action.payload))
        }
    }
})

export const { addAddress, removeAddress } = AddressSlice.actions
export const selectAddress = (state: RootState) => state.address
export default AddressSlice.reducer