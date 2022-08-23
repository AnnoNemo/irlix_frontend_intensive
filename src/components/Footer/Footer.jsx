import React, {useState, useContext, memo} from 'react';
import {SearchingInputText, Searching} from '@pages/main/main';

export const Footer = memo(({setMainTitle, setSearchTitle}) => {
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const {CardSearch, setSearching} = useContext(Searching);
    const [SearchCheckboxStatus, setSearchCheckboxStatus] = useState(false);

    function searching(event) {
        changeSearchingText(event.target.value);
    }

    function openSearch() {
        if (!SearchCheckboxStatus){
            setSearchCheckboxStatus(true);
            changeSearchingText('');
            setSearching((other) => {return {...other, InProcess:true, NoCocktailCard:true, UnfindedName: false}});
            setSearchTitle();
        } else {
            setSearchCheckboxStatus(false);
            setSearching((other) => {return {...other, InProcess:false, NoCocktailCard:false, UnfindedName: false}});
            changeSearchingText('');
            setMainTitle();
        }
    }

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="search">
                    <label className="search-wrapper">
                        <input type="text" onChange={searching} hidden={!SearchCheckboxStatus} placeholder={'Маргарита'} value={SearchingText} className="search__field" />
                        <input type="image" onClick={openSearch} hidden={!SearchCheckboxStatus} src={require('@icons/search_magnify.svg')} alt="Close search button" className="search__close" />
                        <input type="checkbox" hidden={true} checked={SearchCheckboxStatus} name="search_input_show" className="search__status" />
                        <button type="button" onClick={openSearch} hidden={SearchCheckboxStatus} className="common-button search__button">поиск</button>
                    </label>
                </div>
            </div>
            <div className="footer-place">
                {/*  empty solid container for fixed footer  */}
            </div>
        </footer>
    );
});