import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    queries: {
        keyword: '',
        isNotConfirmed: false,
        pageSize: 10,
        pageNumber: 1,
    },
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.queries.keyword = action.payload;
        },
        setIsNotConfirmed: (state, action) => {
            state.queries.isNotConfirmed = action.payload;
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

export const { setKeyword, setIsNotConfirmed, setPageNumber, increasePageNumber, decreasePageNumber } =
    orderSlice.actions;
export const selectOrder = (state) => state.order;
export default orderSlice.reducer;
