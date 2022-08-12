import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import URL_API from '@utils/api/urls';
import API, {getCocktail} from '@utils/api/methods';

export const Cocktail = () => {
    const {id}  = useParams();
    const COCKTAIL_ID = Number({id}.id);
    const navigate = useNavigate();
    const [CurrentCocktail, setCocktail] = useState();
    const goBack = () => navigate(-1);

    const  getCurrentCocktail = async () => {
        return await getCocktail(URL_API.GET_COCKTAILS, 0);
    }

    useEffect(
         () => {
             getCurrentCocktail().then((data) => {
                 setCocktail(data)
             });

        }, []
    );
    if (!CurrentCocktail) {
        return <>not found</>
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