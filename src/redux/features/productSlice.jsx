import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    queries: {
        keyword: '',
        isDiscounted: false,
        isOutOfStock: false,
        collectionId: 0,
        pageSize: 10,
        pageNumber: 1,
    },
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.queries.keyword = action.payload;
        },
        setIsDiscounted: (state, action) => {
            state.queries.isDiscounted = action.payload;
        },
        setIsOutOfStock: (state, action) => {
            state.queries.isOutOfStock = action.payload;
        },
        setCollectionId: (state, action) => {
            state.queries.collectionId = action.payload;
        },
        setPageNumber: (state, action) => {
            state.queries.pageNumber = action.payload;
        },
        increasePageNumber: (state) => {
            state.queries.pageNumber = ++state.queries.pageNumber;
        },
        decreasePageNumber: (state) => {
            state.queries.pageNumber = --state.queries.pageNumber;
        },
    },
});

export const {
    setKeyword,
    setIsDiscounted,
    setIsOutOfStock,
    setCollectionId,
    setPageNumber,
    increasePageNumber,
    decreasePageNumber,
} = productSlice.actions;
export const selectProduct = (state) => state.product;
export default productSlice.reducer;
