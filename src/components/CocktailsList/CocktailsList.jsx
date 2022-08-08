import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {Link} from "react-router-dom";
import WrongCocktailCard from "@components/cocktails_list/WrongCocktailCard/WrongCocktailCard";
import EmptySearchResult from "@components/cocktails_list/EmptySearchResult/EmptySearchResult";

const CocktailsList = () => {
    const [cocktails_list, setCocktailsList] = useState([]);
    const [wrong_search, setWrongSearch] = useState(false);
    const [empty_search, setSearchStatus] = useState(false);
    export const WrongNameCard = React.createContext(wrong_search);
    export const EmptyCardShow = React.createContext(empty_search);
    // const [state, dispatch] = useReducer(reducer, {empty: empty_search, wrong: wrong_search});

    // function reducer(state, action) {
    //     switch (action.type) {
    //         case 'empty_search':
    //
    //             break;
    //         case 'wrong_search':
    //
    //             break
    //         default:
    //
    //
    //     }
    // }
    useEffect(
        () => {
            getCocktailsList().then((list) => setCocktailsList(list))
        },[]
    )
    function getCocktailsList(){
        const api_get_list = 'https://62e12c2bfa99731d75cffd80.mockapi.io/api/dev1/cocktail';
         return fetch(api_get_list)
            .then(response => response.json())
            .catch(e => {
                    alert(e);
                    console.error(e);
                });
    }
    console.log('kek', cocktails_list);

    return (
        <WrongNameCard.Provider value={wrong_search} >
            <EmptyCardShow.Provider value={empty_search} >
                <>
                    <div className="container">
                        <div className="cards-list">
                            {
                                cocktails_list.map(({id, name, alcohol, type, short_description, photo}, index) =>
                                    <article className="cocktail-card" key={index.toString()}>
                                        <Link className="cocktail-card__content-wrapper" to={`/cocktail/${id}`}>
                                            <div className="alcohol-percent-badge">
                                                <div className="alcohol-percent-badge__wrapper">
                                                    <div className="alcohol-percent-badge__value">{alcohol}%</div>
                                                    <div className="alcohol-percent-badge__text">{type}</div>
                                                </div>
                                            </div>
                                            <div className="cocktail-card__info">
                                                <div className="cocktail-card__name">{name}</div>
                                                <div className="cocktail-card__description">{short_description}</div>
                                            </div>
                                        </Link>
                                        <img className="cocktail-card__photo" src={require(`@images/${photo}`)} alt={`Фото коктейля ${name.toLowerCase()}`}/>
                                    </article>
                                )
                            }
                            <WrongCocktailCard />
                            <EmptySearchResul />
                        </div>
                        <div className="dev_temp">
                            <button>Пустой поиск</button>
                            <button>Неправильное имя</button>
                        </div>
                    </div>
                </>
            </EmptyCardShow.Provider>
        </WrongNameCard.Provider>
    );
};

export default CocktailsList;