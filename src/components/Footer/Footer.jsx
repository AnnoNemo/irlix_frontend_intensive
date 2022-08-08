import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="button_wraper">
                    <button type={"button"} className={"common-button"}>поиск</button>
                </div>
            </div>
            <div className="footer-place">
                {/*  empty solid container for fixed footer  */}
            </div>
        </footer>
    );
};

export default Footer;