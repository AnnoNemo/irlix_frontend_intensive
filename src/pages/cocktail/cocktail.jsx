import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';

const Cocktail = () => {
    const {id}  = useParams();
    const COCKTAIL_ID = Number({id}.id);
    const navigate = useNavigate();
    const [CurrentCocktail, setCocktail] = useState();
    const goBack = () => navigate(-1);


    function getCocktail() {
        const COCKTAIL = API.getCocktail(URL_API.GET_COCKTAILS, COCKTAIL_ID);
        return COCKTAIL;
    }

    useEffect(
         () => {
             setCocktail(
                getCocktail()
             )
        }, []
    );
    if (CurrentCocktail === undefined) {
        return null;
    } else {
        return (
            <main className="cocktail">
                <button onClick={goBack} className="cocktail__button-back" type={"button"}>&laquo;</button>
                <h1>{CurrentCocktail.name}</h1>
                <p>{CurrentCocktail.short_description}</p>
            </main>
        );
    }
};

export {Cocktail};