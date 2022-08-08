import React, {useContext} from 'react';
import {Searching} from "@pages/main";

const EmptySearchResult = () => {


    const {CardSearch} = useContext(Searching);
    if (!CardSearch.NoCocktailCard) { return null; }
    return (
        <article className="empty-search-result">
            <p>
                <span>Нет запроса - нет результатов</span>
            </p>
        </article>
    );
};

export default EmptySearchResult;