import React, {useContext, memo} from 'react';
import {Link} from 'react-router-dom';
import {FinalCocktailsList} from '@pages/main/main';

export const CocktailCard = memo(({cocktailList}) => {

    return (
        <>
            {
                cocktailList.map(({id, name, alcohol, type, short_description, photo}, index) =>
                    <article className="cocktail-card" key={id}>
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
                        <img className="cocktail-card__photo" src={require(`@images/${photo}`)}
                             alt={`Фото коктейля ${name.toLowerCase()}`}/>
                    </article>
                )
            }
        </>
    )
});