import React, {useMemo, useState} from 'react';
import {Header} from '@components/Header';
import {QuickFiltersMenu} from '@components/QuickFiltersMenu';
import {CocktailsList} from '@components/CocktailsList';
import {FooterSelectorTitle as Footer} from "@src/containers/FooterSelectorTitle";

export const SearchingInputText = React.createContext(
    {
        SearchingText: '',
        changeSearchingText: () => {}
    });
export const FinalCocktailsList = React.createContext(
    {
        CurrentCocktailsList: [],
        setCurrentList: () => {}
    }
);
export const SelectedCategory = React.createContext(
    {
        SelectedFilter: [],
        setSelectedCategory: () => {}
    }
);
export const Searching = React.createContext(
    {
        CardSearch: {},
        setSearchingStatuses: () => {}
    }
);

export const Main = () => {
    const [SearchingText, changeSearchingText] = useState("");
    const [CurrentCocktailsList, setCurrentList] = useState([]);
    const [SelectedFilter, setSelectedCategory] = useState("");
    const [CardSearch, setSearching] = useState(
        {
            InProcess: false,
            UnfindedName: false,
            NoCocktailCard: false
        }
    );
    const SearchText = useMemo(
        () => ({SearchingText, changeSearchingText}),
        [SearchingText]
    )
    const InitialSearch = useMemo(
        () => ({CardSearch, setSearching}),
        [CardSearch]
    )
    const SettedCocktailList = useMemo(
        () => ({CurrentCocktailsList, setCurrentList}),
        [CurrentCocktailsList]
    )
    const CurrentSelectedFilter = useMemo(
        () => ({SelectedFilter, setSelectedCategory}),
        [SelectedFilter]
    )

    return (
        <SearchingInputText.Provider value={SearchText} >
        {/*<HeaderPageTitle.Provider value={PageTitle} >*/}
        <FinalCocktailsList.Provider value={SettedCocktailList} >
        <SelectedCategory.Provider value={CurrentSelectedFilter} >
        <Searching.Provider value={InitialSearch} >
            <>
                <Header />
                <main className="main-content">
                    <QuickFiltersMenu />
                    <CocktailsList />
                </main>
                <Footer />
            </>
        </Searching.Provider>
        </SelectedCategory.Provider>
        </FinalCocktailsList.Provider>
        {/*</HeaderPageTitle.Provider>*/}
        </SearchingInputText.Provider>
    );
};