import React, {useMemo, useState} from 'react';
import Header from '@components/Header/Header';
import QuickFiltersMenu from '@components/CocktailsList/QuickFiltersMenu/QuickFiltersMenu';
import CocktailsList from '@components/CocktailsList/CocktailsList';
import Footer from '@components/Footer/Footer';

export const SearchingInputText = React.createContext(
    {
        SearchingText: '',
        changeSearchingText: () => {}
    });
export const HeaderPageTitle = React.createContext();
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

const MainBlock = () => {
    const [SearchingText, changeSearchingText] = useState("");
    const [CurrentTitle, changePageTitle] = useState("главная");
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
    const PageTitle = useMemo(
        () => ({CurrentTitle, changePageTitle}),
        [CurrentTitle]
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
        <HeaderPageTitle.Provider value={PageTitle} >
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
        </HeaderPageTitle.Provider>
        </SearchingInputText.Provider>
    );
};

export default MainBlock;