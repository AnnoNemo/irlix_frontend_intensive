import React from 'react';
import {CocktailCard} from '@components/CocktailCard';
import {Loader} from '@components/Loader';
import {STATUS} from "@utils/constants";

export const CocktailsList = ({
    status,
    list
}) => {

    const cocktailsListMapper = {
        [STATUS.idle]: () =>  <CocktailCard cocktailList={list} />,
        [STATUS.loading]: () => <Loader />,
        [STATUS.fulfilled]: () => <CocktailCard cocktailList={list} />,
        [STATUS.rejected]: () => <div><h4 style={{color: 'red'}}>Guru Meditation Error: Can't take cocktails from server, something goes wrong. We work on it.</h4></div>,
    }

    return (
            <>
                <div className="container">
                    <div className="cards-list">
                        {cocktailsListMapper[status]()}
                    </div>
                </div>
            </>
    );
};