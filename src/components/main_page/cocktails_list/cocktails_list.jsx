import React from 'react';
import cocktails_list from "@components/main_page/cocktails_list/cocktails_item_list";

const CocktailsList = () => {
    return (
        <div className="container">
            <div className="cocktail-list-wrapper">
                <div className="cards-table">
                    {
                        cocktails_list.map(({id, name, alcohol, type, short_description, photo}, index) =>
                            <article className="cocktail-card" key={index.toString()}>
                                <a className="cocktail-card__content-wrapper" href=''>
                                    <div className="alcohol-percent-badge">
                                        <div className="alcohol-percent-badge_wrapper">
                                            <div className="alcohol-percent-badge__value">{alcohol}%</div>
                                            <div className="alcohol-percent-badge__text">{type}</div>
                                        </div>
                                    </div>
                                    <div className="cocktail-card__cocktail-info">
                                        <div className="cocktail-card__cocktail-name">{name}</div>
                                        <div className="cocktail-card__cocktail_description">{short_description}</div>
                                    </div>
                                </a>
                                <img className="cocktail-card__cocktail-photo" src={photo} alt=""/>
                            </article>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default CocktailsList;