import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from '../Api';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: null,
    },
    reducers: {
        // setData(state, action) {
        //     return action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export default productSlice.reducer
