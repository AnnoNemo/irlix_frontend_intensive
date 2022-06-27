import React from 'react';
// import irlix_logo_svg from "./irlix_logo_svg";

let styleName = (name) => styles[String(name)];

const Header = function() {
    return (
        <header className="header">
            <div className="header-left-container">
                <h1 className="header-left-container__title">главная</h1>
                <p className="header-left-container__date-text">17 июля 2021</p>
            </div>
            <div className="header-right-container">
                <div className="header-right-container__logo">
                    <img className="header-right-container__logo-image" src="icons/logo_main.svg" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;