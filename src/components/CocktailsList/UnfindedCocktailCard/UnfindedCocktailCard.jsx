import React, {useContext} from 'react';
import {Searching} from '@pages/main';

const UnfindedCocktailCard = () => {

    const {CardSearch, setSearching} = useContext(Searching);

    if (!CardSearch.UnfindedName) { return null; }
    const wrong_search_card = {
            not_found_text: "Ничего не найдено",
            empty_name: "Пусто",
            short_tip: "Попробуйте изменить запрос",
            photo: "wrong_cocktail_card.png",
        }

    return (
        <article className="cocktail-card wrong-cocktail-card">
            <div className="cocktail-card__content-wrapper">
                <div className="wrong-cocktail-card__header">
                    <div className="wrong-cocktail-card__header-wrapper">
                        <div className="wrong-cocktail-card__header-text">{wrong_search_card.not_found_text}</div>
                    </div>
                </div>
                <div className="cocktail-card__info">
                    <div className="cocktail-card__name">{wrong_search_card.empty_name}</div>
                    <div className="cocktail-card__description">{wrong_search_card.short_tip}</div>
                </div>
            </div>
            <img className="cocktail-card__photo" src={require(`@images/${wrong_search_card.photo}`)}
                 alt={`${wrong_search_card.not_found_text}. ${wrong_search_card.short_tip}`}/>
        </article>
    );
};

export default UnfindedCocktailCard;