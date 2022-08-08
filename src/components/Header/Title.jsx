import React, {useContext} from 'react';
import {HeaderPageTitle} from '@pages/main';

const Title = () => {
    const {CurrentTitle, changePageTitle} = useContext(HeaderPageTitle);
    const InitDate = new Date();
    const CurrentDate = InitDate.toLocaleDateString('ru-RU',{year: 'numeric', month: 'long', day: 'numeric'}).replace(/ г./gi, "");
    return (
        <>
            <h1 className="header-left-container__title">{CurrentTitle}</h1>
            <p className="header-left-container__date-text">{CurrentDate}</p>
        </>
    );
};

export default Title;