import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import cocktails_list from "@components/main_page/cocktails_list/cocktails_item_list";

const Cocktail = () => {
    const {id}  = useParams();
    const cocktail_id = Number({id}.id);
    const navigate = useNavigate();
    console.log('ID is =', typeof cocktail_id, cocktail_id);
    console.log('object is =', {id});
    const [current_cocktail, getCocktail] = useState(cocktails_list[cocktail_id]);
    console.log(current_cocktail);
    // useEffect(
    //     getCocktail(
    //         cocktails_list[cocktail_id]
    //     )
    //     ,[{id}]
    // )
    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack} type={"button"}>&laquo;</button>
            <h1>{current_cocktail.name}</h1>
        </div>
    );
};

export {Cocktail};