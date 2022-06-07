import React from 'react';
import irlix_logo_svg from "./irlix_logo_svg";
import styles from '../styles/modules/Header.module.scss';

let styleName = (name) => styles[String(name)];

const Header = function() {
    return (
        <header>
            <div className={styleName('header-main-logo')}>
                {irlix_logo_svg}
            </div>
        </header>
    );
};

export default Header;