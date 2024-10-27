import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductState { }

const initialState: IProductState = {};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: () => initialState,
    },
});

export const {

} = productSlice.actions;

export default productSlice.reducer;
