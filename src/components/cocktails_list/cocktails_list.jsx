import React from 'react';
import cocktails_list from "@components/main_page/cocktails_list/cocktails_item_list";
import {Link} from "react-router-dom";

const wrong_search_card = {
    not_found_text : "Ничего не найдено",
    empty_name: "Пусто",
    short_tip: "Попробуйте изменить запрос",
    photo: require('@images/wrong_cocktail_card.png'),
}

const CocktailsList = () => {
    return (
        <>
            <div className="container">
                <div className="cards-list">
                    {
                        cocktails_list.map(({id, name, alcohol, type, short_description, photo}, index) =>
                            <article className="cocktail-card" key={index.toString()}>
                                <Link className="cocktail-card__content-wrapper" to={`/cocktail/${id}`}>
                                    <div className="alcohol-percent-badge">
                                        <div className="alcohol-percent-badge_wrapper">
                                            <div className="alcohol-percent-badge__value">{alcohol}%</div>
                                            <div className="alcohol-percent-badge__text">{type}</div>
                                        </div>
                                    </div>
                                    <div className="cocktail-card__info">
                                        <div className="cocktail-card__name">{name}</div>
                                        <div className="cocktail-card__description">{short_description}</div>
                                    </div>
                                </Link>
                                <img className="cocktail-card__photo" src={photo} alt=""/>
                            </article>
                        )
                    }
                    {/*<article className="cocktail-card wrong-cocktail-card">*/}
                    {/*    <div className="cocktail-card__content-wrapper">*/}
                    {/*        <div className="alcohol-percent-badge">*/}
                    {/*            <div className="alcohol-percent-badge_wrapper">*/}
                    {/*                <div className="alcohol-percent-badge__value">{wrong_search_card.not_found_text}</div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="cocktail-card__info">*/}
                    {/*            <div className="cocktail-card__name">{wrong_search_card.empty_name}</div>*/}
                    {/*            <div className="cocktail-card__description">{wrong_search_card.short_tip}</div>*/}
                    {/*        </div>*/}
                    {/*        <img className="cocktail-card__photo" src={wrong_search_card.photo} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                    {/*<article className="empty-search-result">*/}
                    {/*    <p>*/}
                    {/*        <span>Нет запроса - нет результатов</span>*/}
                    {/*    </p>*/}
                    {/*</article>*/}
                </div>
            </div>
        </>
    );
};

export default CocktailsList;