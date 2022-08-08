import React from 'react';
import Header from "@components/header/header";
import QuickFiltersMenu from "@components/cocktails_list/quick_filters_menu/quick_filters_menu";
import CocktailsList from "@components/cocktails_list/cocktails_list";
import Footer from "@components/footer/footer";

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