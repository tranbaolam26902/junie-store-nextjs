import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    isClosing: false,
    MIN_PRICE_FOR_FREE_DELIVERY_FEE: 250000,
    DELIVERY_FEE: 30000,
    products: [
        {
            id: 1,
            name: 'Bông tai Lara',
            price: 180000,
            quantity: 1,
            image: '/assets/images/cart-items/product-01.webp',
        },
        {
            id: 2,
            name: 'Bông tai Faustine',
            price: 180000,
            quantity: 1,
            image: '/assets/images/cart-items/product-02.webp',
        },
        {
            id: 3,
            name: 'Bông tai Ivy',
            price: 220000,
            discount: 0.3,
            quantity: 1,
            image: '/assets/images/cart-items/product-03.webp',
        },
        {
            id: 4,
            name: 'Bông tai Stella',
            price: 220000,
            quantity: 1,
            image: '/assets/images/cart-items/product-04.webp',
        },
        {
            id: 5,
            name: 'Bông tai Selini',
            price: 220000,
            discount: 0.5,
            quantity: 1,
            image: '/assets/images/cart-items/product-05.webp',
        },
    ],
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
