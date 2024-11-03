import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import productSlice from './features/product';
import comprasSlice from './features/compras';

const rootReducer = combineReducers({
  product: productSlice,
  compras: comprasSlice
});

const persistConfig = {
  key: '@COMPRASEGURO',
  storage: AsyncStorage,
  whitelist: ["compras", "product"], // Os reducers que você quer persistir
};

const persistedReducer = persistReducer({...persistConfig}, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
    //   authApiSlice.middleware,
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
