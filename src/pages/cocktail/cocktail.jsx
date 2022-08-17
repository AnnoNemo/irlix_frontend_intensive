import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import URL_API from '@utils/api/urls';
import API from '@utils/api/methods';


const  getCurrentCocktail = async (id) => {
    return await API.getCocktail(URL_API.GET_COCKTAILS, id);
}

export const Cocktail = () => {
    const {id}  = useParams();
    const navigate = useNavigate();
    const [CurrentCocktail, setCocktail] = useState();
    const goBack = () => navigate(-1);

 console.log("zap");
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
        return <main>Loading...</main>
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