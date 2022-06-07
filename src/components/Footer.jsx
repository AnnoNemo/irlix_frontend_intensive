import React from 'react';
import irlix_logo_svg from "./irlix_logo_svg";
import styles from '../styles/modules/Footer.module.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                {irlix_logo_svg}
            </div>
        </footer>
    );
};

export default Footer;