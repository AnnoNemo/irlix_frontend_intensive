import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '@components/Footer/Footer';
import {
    MainTitle,
    SearchTitle,
} from '@src/store/reducers/pageTitleSlice';

export const FooterSelectorTitle = () => {
    const dispatch = useDispatch()

    const changeToMainTitle = () => dispatch(MainTitle())
    const changeToSearchTitle = () => dispatch(SearchTitle())

    return <Footer
        mainTitle={changeToMainTitle}
        searchTitle={changeToSearchTitle}
    />
}
