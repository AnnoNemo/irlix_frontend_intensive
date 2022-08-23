import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from "@components/Title";
import {
    selectPageTitle,
} from '@src/store/reducers/pageTitleSlice';

export const HeaderPageTitle = () => {
    const { value } = useSelector(selectPageTitle);

    return <Title
        CurrentTitle={value}
    />
}
