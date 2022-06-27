import React from 'react';
import Header from "@components/app/header";
import HeaderPlace from "@components/app/header_place";
import QuickFiltersMenu from "@components/app/quick_filters_menu";
import CocktailsList from "@components/app/cocktails_list";
import Footer from "./app/footer";
import FooterPlace from "@components/app/footer_place";

const MainBlock = () => {
    return (
        <>
            <Header/>
            <HeaderPlace />
            <main className="main-content">
                <QuickFiltersMenu />
                <CocktailsList />
            </main>
            <Footer />
            <FooterPlace />
        </>
    );
};

export default MainBlock;