import React from 'react';

const Title = () => {
    const init_date = new Date();
    const current_date = init_date.toLocaleDateString('ru-RU',{year: 'numeric', month: 'long', day: 'numeric'}).replace(/ г./gi, "");
    return (
        <>
            <h1 className="header-left-container__title">главная</h1>
            <p className="header-left-container__date-text">{current_date}</p>
        </>
    );
};

export default Title;