import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showSearch: false,
    isClosing: false,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setShowSearch: (state, action) => {
            state.showSearch = action.payload;
        },
        setIsClosing: (state, action) => {
            state.isClosing = action.payload;
        },
    },
});

export const { setShowSearch, setIsClosing } = searchSlice.actions;
export const selectSearch = (state) => state.search;
export default searchSlice.reducer;
