import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import cocktails_list from "@components/cocktails_list/cocktails_item_list";

const Cocktail = () => {
    const {id}  = useParams();
    const cocktail_id = Number({id}.id);
    const navigate = useNavigate();

    const [current_cocktail, getCocktail] = useState(cocktails_list[cocktail_id]);

    const goBack = () => navigate(-1);

    return (
        <main className="cocktail">
            <button onClick={goBack} className="cocktail__button-back" type={"button"}>&laquo;</button>
            <h1>{current_cocktail.name}</h1>
            <p>{current_cocktail.short_description}</p>
        </main>
    );
};

export {Cocktail};