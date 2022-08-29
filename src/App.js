import React from 'react';
import '@styles/main.scss';
import '@styles/cocktail.scss';
import {Route, Routes} from 'react-router-dom';
import {Main} from '@pages/main';
import {Cocktail} from '@pages/cocktail';

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="cocktail/:id" exact element={<Cocktail />} />
            </Routes>
        </>
    );
}

export default App;
