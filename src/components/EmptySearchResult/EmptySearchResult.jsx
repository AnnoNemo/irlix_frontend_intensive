import React, {useContext} from 'react';

export const EmptySearchResult = () => {

    return (
        <article className="empty-search-result">
            <p>
                <span>Нет запроса - нет результатов</span>
            </p>
        </article>
    );
};