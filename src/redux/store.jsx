import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './features/cartSlice';
import productSlice from './features/productSlice';
import searchSlice from './features/searchSlice';

export const store = configureStore({
    reducer: { cart: cartSlice, product: productSlice, search: searchSlice },
});
