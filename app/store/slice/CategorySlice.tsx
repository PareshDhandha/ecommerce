import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk('category', async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const result = await res.json();
    console.log('category....', result)
    return result
})

const categorySlice = createSlice({
    name: 'categorys',
    initialState: {
        data: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export default categorySlice.reducer