import React, {useContext, useEffect, useState, memo} from 'react';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';
import {CocktailCard} from '@components/CocktailCard';
import {EmptySearchResult} from '@components/EmptySearchResult';
import {UnfindedCocktailCard} from '@components/UnfindedCocktailCard';
import {SearchingInputText, FinalCocktailsList, SelectedCategory, Searching} from '@pages/main/main';
import {CATEGORY_LIST} from "@components/QuickFiltersMenu/QuickFiltersMenuElementsList";

const getCocktails = async () => {
    return  await API.getListFromServer(URL_API.GET_COCKTAILS);
}

const getFilteredCocktailsByCategory = (cocktailList, category) => {
    if (category) {
        return cocktailList.filter(cocktail => cocktail.category.includes(category) )
    } else {
        return cocktailList
    }
}

const getCocktailsBySearchValue = (cocktailList, searchValue) => cocktailList.filter((cocktail) => cocktail.name.toLowerCase().includes(searchValue.toLowerCase()))


export const CocktailsList = memo(() => {

    const [CocktailsList, setCocktailsList] = useState([]);
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const {CurrentCocktailsList, setCurrentList} = useContext(FinalCocktailsList);
    const {SelectedFilter, setSelectedCategory} = useContext(SelectedCategory);
    const {CardSearch, setSearching} = useContext(Searching);


    useEffect(
          () => {
            getCocktails().then((data) => {
                setCocktailsList(data);
            });

        }, []
    )

    const CocktailListByCategory  = getFilteredCocktailsByCategory(CocktailsList, SelectedFilter)
    const getFilteredCocktailList = getCocktailsBySearchValue(CocktailListByCategory, SearchingText)


    return (
            <>
                <div className="container">
                    <div className="cards-list">

                        {<CocktailCard cocktailList={getFilteredCocktailList} />}
                        {<EmptySearchResult />}
                        {<UnfindedCocktailCard />}
                    </div>
                </div>
            </>
    );
});