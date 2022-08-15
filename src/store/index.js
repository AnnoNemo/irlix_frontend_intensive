import { configureStore } from '@reduxjs/toolkit';
import pageTitleReducer from './reducers/pageTitleSlice';

export const store = configureStore({
    reducer: {
        title: pageTitleReducer,
    },
});
