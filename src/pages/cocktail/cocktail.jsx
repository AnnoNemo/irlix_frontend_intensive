import React, {useEffect, useState, memo} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';
import {Loader} from '@components/Loader';

const  getCurrentCocktail = async (id) => {
    return await API.getCocktail(URL_API.GET_COCKTAILS, id);
}

export const Cocktail = memo( () => {
    const {id}  = useParams();
    const navigate = useNavigate();
    const [CurrentCocktail, setCocktail] = useState();
    const goBack = () => navigate(-1);

    useEffect(
         () => {
             if (id) {
                 getCurrentCocktail(id).then((data) => {
                     setCocktail(data)
                 });
             }
        }, [id]
    );

    if (!CurrentCocktail) {
        return <main className="cocktail"><div className="container"><Loader /></div></main>
    } else {
        return (
            <main className="cocktail">
                <div className="container">
                    <div className="top-wrapper">
                        <input type="image" onClick={goBack} className="cocktail__button-back" src={require(`@icons/back_button_sign.svg`)} alt="Button back to list" />
                        <img className="cocktail__image" src={require(`@images/${CurrentCocktail.photo}`)} alt={`Cocktail ${CurrentCocktail.name} photo`}/>
                    </div>
                    <div className="bottom-wrapper">
                        <div className="cocktail-title">
                            <h1 className="cocktail-title__name">{CurrentCocktail.name}</h1>
                            <h2 className="cocktail-title__description">{CurrentCocktail.short_description}</h2>
                        </div>
                        <div className="ingridients-list">
                            <h3 className="ingridients-list__title">Ингридиенты:</h3>
                            <ul className="ingridients-list__wrapper">
                                {
                                    CurrentCocktail.ingridients.map(({name, value, meaning}, index) =>
                                        <li className="ingridient-item" key={index}>
                                            <span className="ingridient-item__name">{name}</span>
                                            <span className="ingridient-item__dotted-line"></span>
                                            <span className="ingridient-item__value-meaning">{value} {meaning}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="recipe-list">
                            <h3 className="recipe-list__title">Как готовить:</h3>
                            <ul className="recipe-list__wrapper">
                                {
                                    CurrentCocktail.recipe.map((paragraph, index) =>
                                        <li key={index} className="recipe-item">
                                            {paragraph}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
});