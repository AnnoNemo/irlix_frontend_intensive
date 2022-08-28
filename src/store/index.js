import { configureStore } from '@reduxjs/toolkit';
import {reducers} from "@src/store/reducers/rootReducer";

export const store = configureStore({
    reducer: reducers,
});
