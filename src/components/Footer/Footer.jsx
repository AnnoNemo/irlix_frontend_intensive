import React, {useState, useContext, memo} from 'react';
import {SearchingInputText, Searching} from '@pages/main';

const Footer = memo(({mainTitle, searchTitle}) => {
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const {CardSearch, setSearching} = useContext(Searching);
    const [ButtonText, setButtonText] = useState("поиск");
    const [SearchCheckboxStatus, setSearchCheckboxStatus] = useState(false);

    function searching(event) {
        changeSearchingText(event.target.value);
    }

    function openSearch() {
        if (!SearchCheckboxStatus){
            setSearchCheckboxStatus(true);
            setButtonText(' ');
            changeSearchingText('');
            setSearching((other) => {return {...other, InProcess:true, NoCocktailCard:true, UnfindedName: false}});
            searchTitle();
        } else {
            setSearchCheckboxStatus(false);
            setSearching((other) => {return {...other, InProcess:false, NoCocktailCard:false, UnfindedName: false}});
            setButtonText("поиск");
            changeSearchingText('');
            mainTitle();
        }
    }

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="search">
                    <label className="search-wrapper">
                        <input type="text" onChange={searching} hidden={!SearchCheckboxStatus} placeholder={'Маргарита'} value={SearchingText} className="search__field" />
                        <input type="checkbox" hidden={true} checked={SearchCheckboxStatus} name="search_input_show" className="search__status" />
                        <button type={"button"} onClick={openSearch} className="common-button search__button">{ButtonText}</button>
                    </label>
                </div>
            </div>
            <div className="footer-place">
                {/*  empty solid container for fixed footer  */}
            </div>
        </footer>
    );
});

export default Footer;