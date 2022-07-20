import React from 'react';
import Header from "@components/main_page/header/header";
import QuickFiltersMenu from "@components/main_page/cocktails_list/quick_filters_menu/quick_filters_menu";
import CocktailsList from "@components/main_page/cocktails_list/cocktails_list";
import Footer from "@components/main_page/footer/footer";

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