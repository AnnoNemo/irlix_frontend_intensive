import {createSlice, createAsyncThunk, current} from '@reduxjs/toolkit';
import { TITLES, STATUS } from '@utils/constants';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';

const initialState = {
    list: [],
    cachedList: [],
    status: STATUS.idle,
};

export const getCocktailsList = createAsyncThunk(
    'cocktails/getListFromServer',
    async () => {
        return await API.getListFromServer(URL_API.GET_COCKTAILS);
    }
)

export const cocktailsListSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        resetList: (state) =>{
            state.list = JSON.parse(JSON.stringify(state.cachedList));
        },
        filteringByParams: (state, action) => {
            const {parameter, searchingThing} = action.payload;

            state.list = current(state.list).filter((cocktail) => {
                const parameterType = typeof cocktail[parameter];
                switch (parameterType) {
                    case "object":
                        if (cocktail[parameter].includes(searchingThing)) {
                            return cocktail
                        }
                        break;
                    case "string":
                    case "number":
                    case "bigint":
                        if (cocktail[parameter].toLowerCase().includes(searchingThing.toLowerCase())) {
                            return cocktail
                        }
                        break;
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCocktailsList.pending, (state) => {
                state.status = STATUS.loading;
            })
            .addCase(getCocktailsList.fulfilled, (state, action) => {
                state.status = STATUS.fulfilled;
                state.list = action.payload;
                state.cachedList = action.payload;
            })
            .addCase(getCocktailsList.rejected, (state) => {
                state.status = STATUS.rejected;
            });
    }
});

export const { resetList, filteringByParams } = cocktailsListSlice.actions;

export const takeCocktailsList = (state) => state.cocktails;

export default cocktailsListSlice.reducer;
