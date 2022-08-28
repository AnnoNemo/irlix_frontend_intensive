import React, {useMemo, useState} from 'react';
import {Header} from '@components/Header';
import {QuickFiltersMenu as CategoryFilter} from '@components/QuickFiltersMenu';
import {CocktailsList} from '@src/containers/CocktailsList';
import {FooterSelectorTitle as Footer} from "@src/containers/FooterSelectorTitle";

export const SearchingInputText = React.createContext(
    {
        SearchingText: false,
        changeSearchingText: () => {}
    });
export const SelectedCategory = React.createContext(
    {
        SelectedFilter: false,
        setSelectedCategory: () => {}
    }
);

export const Main = () => {
    const [SearchingText, changeSearchingText] = useState(false);
    const [SelectedFilter, setSelectedCategory] = useState(false);
    const SearchText = useMemo(
        () => ({SearchingText, changeSearchingText}),
        [SearchingText]
    )
    const CurrentSelectedFilter = useMemo(
        () => ({SelectedFilter, setSelectedCategory}),
        [SelectedFilter]
    )

    return (
        <SearchingInputText.Provider value={SearchText} >
        <SelectedCategory.Provider value={CurrentSelectedFilter} >
            <>
                <Header />
                <main className="main-content">
                    <CategoryFilter />
                    <CocktailsList />
                </main>
                <Footer />
            </>
        </SelectedCategory.Provider>
        </SearchingInputText.Provider>
    );
};