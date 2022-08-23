import { configureStore } from '@reduxjs/toolkit';
import pageTitleReducer from './reducers/pageTitleSlice';
import cocktailsListReducer from './reducers/cocktailsListSlice';

export const store = configureStore({
    reducer: {
        title: pageTitleReducer,
        cocktails: cocktailsListReducer,
    },
});
