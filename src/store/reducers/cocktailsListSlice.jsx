import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TITLES, STATUS } from '@utils/constants';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';

export const fetchList = createAsyncThunk()

const initialState = {
    list: [],
    status: STATUS.idle
};

export const cocktailsListSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        GetList: (state) => {
            state.list = API.getListFromServer(URL_API.GET_COCKTAILS)
                .then((json) => { json.slice() });
        },
        FilteringByParams: (state, {parametr, target}) => {
            state.value = TITLES.search;
        },
    },
    extraReducers: {

    }
});

export const { MainTitle, SearchTitle } = cocktailsListSlice.actions;

export const getCocktailsList = (state) => state.cocktails;

export default cocktailsListSlice.reducer;
