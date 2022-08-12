import React, {useContext, useEffect, useRef, useState} from 'react';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';
import UnfindedCocktailCard from '@components/CocktailsList/UnfindedCocktailCard/UnfindedCocktailCard';
import EmptySearchResult from '@components/CocktailsList/EmptySearchResult/EmptySearchResult';
import CocktailCard from '@components/CocktailsList/CocktailCard/CocktailCard';
import {SearchingInputText, FinalCocktailsList, SelectedCategory, Searching} from '@pages/main';

const CocktailsList = () => {

    const [CocktailsList, setCocktailsList] = useState([]);
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const {CurrentCocktailsList, setCurrentList} = useContext(FinalCocktailsList);
    const {SelectedFilter, setSelectedCategory} = useContext(SelectedCategory);
    const {CardSearch, setSearching} = useContext(Searching);

    const getCocktails = async () => {
        return  await API.getListFromServer(URL_API.GET_COCKTAILS);
    }

    useEffect(
          () => {
            getCocktails().then((data) => {
                setCocktailsList(data);
            });

        }, []
    )
    useEffect(
        () => {
            if (CocktailsList && CocktailsList.length > 0){
                setCurrentList(CocktailsList);
            }

        }, [CocktailsList]
    )
    // Переключения состояние поиска
    useEffect(
        () => {
            if (CardSearch.InProcess) {
                setCurrentList([]);
            } else {
                setCurrentList(CocktailsList);
            }
        }, [CardSearch.InProcess]
    )

    function searchingInCardName(array, TextToSearch) {
        if (array.length === 0) {return []}
        const NEW_LIST = JSON.parse(JSON.stringify(array));
        return NEW_LIST.filter(
            value => {
                if (value.name.toLowerCase().includes(TextToSearch.toLowerCase())) {
                    return value;
                }
            }
        );
    }
    function filteringCardsByCategory(array, filter) {
        if (array.length === 0) {return []}
        const NEW_LIST = JSON.parse(JSON.stringify(array));
        return NEW_LIST.filter(
            (value) => {
                for (const CATEGORY of value.category) {
                    if (CATEGORY.toLowerCase().includes(filter.toLowerCase())) {
                        return value;
                    }
                }
            }
        )
    }
    function searchingProcess(array, search, SearchText, filter) {
        const CHAR_QUANTITY_TO_SEARCH = 1;
        const LENGTH_SEARCH_STRING = SearchText.length;
        const IS_FILTER_SET = filter.length > 0;
        let FoundCardQuantity = 0;

        if (search.InProcess === false) { // Фильтрация категории без поиска
            const TEMP_LIST = filteringCardsByCategory(array, filter);
            FoundCardQuantity = TEMP_LIST.length;
            if (IS_FILTER_SET && FoundCardQuantity > 0) {
                setSearching((other) => {
                    return {...other, NoCocktailCard: false, UnfindedName: false}
                });
                setCurrentList(
                    TEMP_LIST
                );
            } else if (IS_FILTER_SET && FoundCardQuantity < 1) {
                setSearching((other) => {
                    return {...other, NoCocktailCard: false, UnfindedName: true}
                });
                setCurrentList(
                    []
                );
            } else if (!IS_FILTER_SET) {
                setSearching((other) => {
                    return {...other, NoCocktailCard: false, UnfindedName: false}
                });
                setCurrentList(array);
            }
        } else if (search.InProcess) { // Механизм поиска с фильтрацией по категории если она выбрана
            if (LENGTH_SEARCH_STRING > CHAR_QUANTITY_TO_SEARCH) {
                setSearching((other) => {
                    return {...other, NoCocktailCard: false, UnfindedName: false}
                });
                if (IS_FILTER_SET) {
                    const TEMP_FILTERED_LIST = filteringCardsByCategory(array, filter);
                    const TEMP_FOUND_CARDS = searchingInCardName(TEMP_FILTERED_LIST, SearchText);
                    FoundCardQuantity = TEMP_FOUND_CARDS.length;
                    if (FoundCardQuantity > 0) {
                        setCurrentList(TEMP_FOUND_CARDS);
                    } else {
                        setCurrentList([]);
                        setSearching((other) => {
                            return {...other, NoCocktailCard: false, UnfindedName: true}
                        });
                    }
                } else {
                    const TEMP_LIST = searchingInCardName(array, SearchText);
                    FoundCardQuantity = TEMP_LIST.length;
                    setCurrentList(
                        TEMP_LIST
                    )
                }
            } else if (LENGTH_SEARCH_STRING <= CHAR_QUANTITY_TO_SEARCH) {
                setSearching((other) => {
                    return {...other, NoCocktailCard: true, UnfindedName: false}
                });
                setCurrentList([]);
            }
            if (LENGTH_SEARCH_STRING > CHAR_QUANTITY_TO_SEARCH && FoundCardQuantity === 0) {
                setCurrentList([]);
                setSearching((other) => {
                    return {...other, NoCocktailCard: false, UnfindedName: true}
                });
            }
        }
    }

    useEffect(() => {
        searchingProcess(CocktailsList, CardSearch, SearchingText, SelectedFilter);
        }, [SearchingText, SelectedFilter])

    return (
            <>
                <div className="container">
                    <div className="cards-list">
                        {<CocktailCard />}
                        {<EmptySearchResult />}
                        {<UnfindedCocktailCard />}
                    </div>
                </div>
            </>
    );
};

export default CocktailsList;