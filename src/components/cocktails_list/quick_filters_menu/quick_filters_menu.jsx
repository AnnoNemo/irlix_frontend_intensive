import React, {useState} from 'react';
import filter_elements_list from '@components/cocktails_list/quick_filters_menu/quick_filters_menu_elements_list';

const QuickFiltersMenu = () => {
    const [isChecked, setChecksList] = useState(
        new Array(filter_elements_list.length).fill(false)
    );

    const setCheckStatus = (element, index) => {
        const new_list = isChecked.map(
            function(value, position) {
                if (position === index) {
                    return !value;
                } else {
                    return value;
                }
            }
        )
        // find the parent li, to change his class
        let parent_target = element.target.closest(
            '.quick-filters-menu__list-item'
        );
        switch (new_list[index]) {
            case true:
                parent_target.className = parent_target.className.concat(" ", "quick-filters-menu__list-item_active");
                break;
            case false:
                parent_target.className = "quick-filters-menu__list-item";
                break;
        }
        setChecksList(new_list)
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
                                    key={index.toString()}
                                >
                                    <label
                                        className="quick-filters-menu__list-item-text"
                                    >
                                        <input
                                            type="checkbox"
                                            className='quick-filters-menu__list-item-selector'
                                            onChange={(element)=> setCheckStatus(element, index)}
                                            checked={isChecked[index]}
                                            name=""
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

export default QuickFiltersMenu;