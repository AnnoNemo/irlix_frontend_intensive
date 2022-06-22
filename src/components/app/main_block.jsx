import React from 'react';
import HeaderPlace from "@components/app/header_place";
import QuickFiltersMenu from "@components/app/quick_filters_menu";
import CocktailsList from "@components/app/cocktails_list";
import FooterPlace from "@components/app/footer_place";

const MainBlock = () => {
    return (
        <main className="main-content">
            <HeaderPlace />
            <QuickFiltersMenu />
            <CocktailsList />
            <FooterPlace />
        </main>
    );
};

export default MainBlock;