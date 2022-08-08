import React from "react";
import '@styles/main.scss';
import '@styles/cocktail.scss';
import MainPage from "@pages/main_page";
import {Route, Routes} from "react-router-dom";
import {Cocktail} from "@pages/cocktail/cocktail";

function App() {

    return (
        <>
            <Routes>
                <Route  path="/" element={<MainPage />} />
                <Route path="cocktail/:id" element={<Cocktail />} />
            </Routes>
        </>
    );
}

export default App;
