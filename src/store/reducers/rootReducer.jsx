import {combineReducers} from "redux";
import pageTitleReducer from "@src/store/reducers/pageTitleSlice";
import cocktailsListReducer from "@src/store/reducers/cocktailsListSlice";

export const reducers = combineReducers({
    title: pageTitleReducer,
    cocktails: cocktailsListReducer,
})