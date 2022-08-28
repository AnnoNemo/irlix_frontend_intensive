import React, {useContext, useEffect, useMemo, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getCocktailsList,
    resetList,
    filteringByParams,
    takeCocktailsList
} from "@src/store/reducers/cocktailsListSlice";
import { CocktailsList as CocktailsListView } from '@components/CocktailsList';
import {SearchingInputText, SelectedCategory} from "@pages/main";

export const CocktailsList = () => {

    const { list, status } = useSelector(takeCocktailsList);
    const dispatch = useDispatch();

    const [CocktailsList, setCocktailsList] = useState(list);
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const {SelectedFilter, setSelectedCategory} = useContext(SelectedCategory);

    const resetCocktailsList = () => dispatch(resetList());
    const getCocktailsListAsync = () => dispatch(getCocktailsList());
    const filteringListByParams = (parameter, searchingThing) => dispatch(filteringByParams({parameter, searchingThing}));

    const takeCardList = () => {
        resetCocktailsList();
        if (SelectedFilter) {
            filteringListByParams('category', SelectedFilter);
        }
        if (SearchingText) {
            filteringListByParams('name', SearchingText);
        }
    }

    useEffect(() => {
        getCocktailsListAsync()
        }, []
    )

    const currentList = useMemo(
        () => {
            takeCardList();
            return list;
        }, [SearchingText, SelectedFilter]
    )

    useEffect(
        () => {
            setCocktailsList(list);
        }, [list]
    )

    return <CocktailsListView
        status={status}
        list={CocktailsList}
    />;
};