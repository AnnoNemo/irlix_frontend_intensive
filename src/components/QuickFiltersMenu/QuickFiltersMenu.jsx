import React, {useContext, useState} from 'react';
import filter_elements_list from '@components/QuickFiltersMenu/QuickFiltersMenuElementsList';
import {SelectedCategory} from "@pages/main";

export const QuickFiltersMenu = () => {
    const {SelectedFilter, setSelectedCategory} = useContext(SelectedCategory);

    const setCheckStatus = (element) => {
        const ELEMENT = element.target;
        // find the parent li, to change his class
        const PARENT_ELEMENT = ELEMENT.closest(
            '.quick-filters-menu__list-item'
        );
        document.querySelectorAll('.quick-filters-menu__list-item-selector').forEach(
            (item, key) => {
                if (item.name !== ELEMENT.name) {
                    item.checked = false;
                    item.closest(
                        '.quick-filters-menu__list-item'
                    ).className = "quick-filters-menu__list-item";
                } else {
                    switch (ELEMENT.checked) {
                        case true:
                            PARENT_ELEMENT.className = PARENT_ELEMENT.className.concat(" ", "quick-filters-menu__list-item_active");
                            setSelectedCategory(ELEMENT.value);
                            break;
                        case false:
                            PARENT_ELEMENT.className = "quick-filters-menu__list-item";
                            setSelectedCategory(null);
                            break;
                    }
                }
            }
        );
    };

    return (
        <div className="quick-filters-menu">
            <ul className="quick-filters-menu__list">
                {
                    filter_elements_list.map(
                        function({name}, index) {
                            return (
                                <li
                                    className="quick-filters-menu__list-item"
                                    key={index}
                                >
                                    <label
                                        className="quick-filters-menu__list-item-text"
                                    >
                                        <input
                                            type="checkbox"
                                            className='quick-filters-menu__list-item-selector'
                                            onChange={(element)=> setCheckStatus(element)}
                                            name={`category_quick_filter_${index}`}
                                            value={name}
                                        />
                                        {name}
                                    </label>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </div>
    );
};