import React from 'react';

const CocktailsList = () => {

    const cocktail_list_array = [
        (
            <aside className="cocktail-card">
                <a className="cocktail-card__content-wrapper" href="#">
                    <div className="alcohol-percent-badge">
                        <div className="alcohol-percent-badge_wrapper">
                            <div className="alcohol-percent-badge__value">30%</div>
                            <div className="alcohol-percent-badge__text">алкоголь</div>
                        </div>
                    </div>
                    <div className="cocktail-card__cocktail-info">
                        <div className="cocktail-card__cocktail-name">Blackberry </div>
                        <div className="cocktail-card__cocktail_description">Освежающий напиток</div>
                    </div>
                </a>
                <img className="cocktail-card__cocktail-photo" src="images/cocktail_1_card.png" alt=""/>
            </aside>
        ),(
            <aside className="cocktail-card">
                <div className="cocktail-card__content-wrapper">
                    <div className="alcohol-percent-badge">
                        <div className="alcohol-percent-badge_wrapper">
                            <div className="alcohol-percent-badge__value">40%</div>
                            <div className="alcohol-percent-badge__text">алкоголь</div>
                        </div>
                    </div>
                    <div className="cocktail-card__cocktail-info">
                        <div className="cocktail-card__cocktail-name">Мохито </div>
                        <div className="cocktail-card__cocktail_description">Освежающий напиток</div>
                    </div>
                </div>
                <img className="cocktail-card__cocktail-photo" src="images/cocktail_2_card.png" alt=""/>
            </aside>
        )
    ]

    return (
        <div className="container">
            <div className="cocktail-list-wrapper">
                <div className="cards-table">
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array}
                    {cocktail_list_array[0]}
                </div>
            </div>
        </div>
    );
};

export default CocktailsList;