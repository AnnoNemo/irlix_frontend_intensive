import React from 'react';
import Header from "@components/Header/Header";
import QuickFiltersMenu from "@components/CocktailsList/QuickFiltersMenu/QuickFiltersMenu";
import CocktailsList from "@components/CocktailsList/CocktailsList";
import Footer from "@components/Footer/Footer";

const MainBlock = () => {
    return (
        <>
            <Header/>
            <main className="main-content">
                <QuickFiltersMenu />
                <CocktailsList />
            </main>
            <Footer />
        </>
    );
};

export default MainBlock;