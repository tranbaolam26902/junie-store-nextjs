import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './features/cartSlice';
import orderSlice from './features/orderSlice';
import productSlice from './features/productSlice';
import searchSlice from './features/searchSlice';

export const store = configureStore({
    reducer: { cart: cartSlice, order: orderSlice, product: productSlice, search: searchSlice },
});
