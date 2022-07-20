import React from 'react';
import logo_main_svg from '@icons/logo_main.svg';

let styleName = (name) => styles[String(name)];

const Header = function() {
    const init_date = new Date();
    const current_date = init_date.toLocaleDateString('ru-RU',{year: 'numeric', month: 'long', day: 'numeric'}).replace(/ г./gi, "");
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-left-container">
                    <h1 className="header-left-container__title">главная</h1>
                    <p className="header-left-container__date-text">{current_date}</p>
                </div>
                <div className="header-right-container">
                    <div className="header-right-container__logo">
                        <img className="header-right-container__logo-image" src={logo_main_svg} alt="" />
                    </div>
                </div>
            </div>
            <div className="header-place">
                {/*  empty solid container for fixed header  */}
            </div>
        </header>
    );
};

export default Header;