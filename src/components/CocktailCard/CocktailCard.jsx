import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {EmptySearchResult} from '@components/EmptySearchResult';
import {UnfindedCocktailCard} from '@components/UnfindedCocktailCard';
import {SearchingInputText} from "@pages/main";

export const CocktailCard = ({cocktailList}) => {

    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);

    if (SearchingText === "" || SearchingText.length <= 1) {return <EmptySearchResult />}

    switch (cocktailList.length > 0) {
        case true:
            return (
                <>
                    {
                        cocktailList.map(({id, name, alcohol, type, short_description, photo}, index) =>
                            <article className="cocktail-card" key={id}>
                                <div className="cocktail-card__content-wrapper" >
                                    <div className="alcohol-percent-badge">
                                        <div className="alcohol-percent-badge__wrapper">
                                            <div className="alcohol-percent-badge__value">{alcohol}%</div>
                                            <div className="alcohol-percent-badge__text">{type}</div>
                                        </div>
                                    </div>
                                    <Link className="cocktail-card__info" to={`/cocktail/${id}`}>
                                        <div className="cocktail-card__name">{name}</div>
                                        <div className="cocktail-card__description">{short_description}</div>
                                    </Link>
                                </div>
                                <img className="cocktail-card__photo" src={require(`@images/${photo}`)}
                                     alt={`Фото коктейля ${name.toLowerCase()}`}/>
                            </article>
                        )
                    }
                </>
            );
        case false:
            return (<UnfindedCocktailCard />);
    }
};