import React from 'react';
import logo_main_svg from '@icons/logo_main.svg';

let styleName = (name) => styles[String(name)];

const Header = function() {
    console.log(logo_main_svg)
    return (
        <header className="header">
            <div className="header-left-container">
                <h1 className="header-left-container__title">главная</h1>
                <p className="header-left-container__date-text">17 июля 2021</p>
            </div>
            <div className="header-right-container">
                <div className="header-right-container__logo">
                    <img className="header-right-container__logo-image" src={logo_main_svg} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;