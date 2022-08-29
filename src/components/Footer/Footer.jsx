import React, {useState, useContext, useCallback, useRef, useEffect} from 'react';
import {SearchingInputText} from '@pages/main/main';

export const Footer = ({setMainTitle, setSearchTitle}) => {
    const {SearchingText, changeSearchingText} = useContext(SearchingInputText);
    const [SearchCheckboxStatus, setSearchCheckboxStatus] = useState(false);
    const searchInputField = useRef(null);

    function searching(event) {
        changeSearchingText(event.target.value);
    }

    function openSearch() {
        if (!SearchCheckboxStatus){
            setSearchCheckboxStatus(true);
            changeSearchingText('');
            setSearchTitle();
        } else {
            setSearchCheckboxStatus(false);
            changeSearchingText(false);
            setMainTitle();
        }
    }

    const pressEscapeHandler = useCallback((event) => {
        if (event.key === "Escape" && SearchCheckboxStatus) {
            event.preventDefault();
            openSearch();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", pressEscapeHandler);

        return () => {
            document.removeEventListener("keydown", pressEscapeHandler);
        };
    }, []);

    useEffect(
        () => {
            if (SearchCheckboxStatus) {
                searchInputField.current.focus();
            }
        }
        ,[SearchCheckboxStatus]
    )

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="search">
                    <label className="search-wrapper">
                        <input type="text" ref={searchInputField} onChange={searching} hidden={!SearchCheckboxStatus} placeholder={'Маргарита'} value={SearchingText} className="search__field" />
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
};