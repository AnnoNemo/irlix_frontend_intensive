import React from 'react';
// import Title from '@components/Header/Title';
import {HeaderPageTitle} from "@src/containers/HeaderPageTitle";
import Logo from '@components/Header/Logo';

const Header = function() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-left-container">
                    <HeaderPageTitle />
                </div>
                <div className="header-right-container">
                    <Logo />
                </div>
            </div>
            <div className="header-place">
                {/*  empty solid container for fixed header  */}
            </div>
        </header>
    );
};

export default Header;