import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  products: [],
  loading: false,
  error: null,
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });
  },
});

export default ProductSlice.reducer;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category) => {
    const response = await fetch(
      `${process.env.REACT_APP_DATA_URL}/category/${category}?limit=10`
    );

    const products = await response.json();
    return products;
  }
);

export const selectAllProducts = (state) => state.products.products;
