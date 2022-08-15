import { createSlice } from '@reduxjs/toolkit';
import { TITLES } from '@utils/constants';

const initialState = {
    value: "главная",
};

export const pageTitleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        MainTitle: (state) => {
            state.value = TITLES.main;
        },
        SearchTitle: (state) => {
            state.value = TITLES.search;
        },
    },
});

export const { MainTitle, SearchTitle } = pageTitleSlice.actions;

export const selectPageTitle = (state) => state.title;

export default pageTitleSlice.reducer;
