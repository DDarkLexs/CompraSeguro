import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IComprasState {
  compras: ICompras[];
}

const initialState: IComprasState = {
  compras: [],
};

const comprasSlice = createSlice({
  name: 'compras',
  initialState,
  reducers: {
    setCompras: (state, action: PayloadAction<ICompras[]>) => {
      state.compras = action.payload;
    },
    addCompra: (state, action: PayloadAction<ICompras>) => {
      state.compras.push(action.payload);
    },
    removeCompra: (state, action: PayloadAction<number>) => {
      state.compras = state.compras.filter(compra => compra.id_compra !== action.payload);
    },
    reset: () => initialState,
  },
});

export const {
  addCompra,
  removeCompra,
  setCompras,
  reset
} = comprasSlice.actions;

export default comprasSlice.reducer;
