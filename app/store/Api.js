import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("product", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const result = await res.json();
  return result;
});
