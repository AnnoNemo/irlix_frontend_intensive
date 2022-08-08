import React from 'react';
import Title from '@components/Header/Title';
import Logo from '@components/Header/Logo';

const Header = function() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-left-container">
                    <Title />
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