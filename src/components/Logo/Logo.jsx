import React from 'react';
import {Link} from "react-router-dom";
import logo_main_svg from '@icons/logo_main';

export const Logo = () => {
    return (
        <div>
            <div className="header-right-container__logo">
                <Link to={"/"}>
                    <img className="header-right-container__logo-image" src={logo_main_svg} alt="" />
                </Link>
            </div>
        </div>
    );
};