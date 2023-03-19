import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  flashSaleProducts: [],
  loading: false,
  error: null,
};

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFlashSaleProducts.fulfilled, (state, action) => {
      state.flashSaleProducts = [...action.payload];
    });
  },
});

export default HomeSlice.reducer;

export const fetchFlashSaleProducts = createAsyncThunk(
  'home/fetchSaleProducts',
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_DATA_URL}?sort=asc&limit=10`
    );

    const products = await response.json();
    return products;
  }
);

export const selectAllHomeProducts = (state) => state.home.flashSaleProducts;
