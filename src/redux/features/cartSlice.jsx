import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    isClosing: false,
    MIN_PRICE_FOR_FREE_DELIVERY_FEE: 250000,
    DELIVERY_FEE: 30000,
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setShowCart: (state, action) => {
            state.showCart = action.payload;
        },
        setIsClosing: (state, action) => {
            state.isClosing = action.payload;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        setProductQuantity: (state, action) => {
            state.products.find((product) => product.id === action.payload.id).quantity =
                action.payload.quantity > 1 ? action.payload.quantity : 1;
        },
    },
});

export const { setShowCart, setIsClosing, addProduct, removeProduct, setProductQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;
