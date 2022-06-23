import React from 'react';

const QuickFiltersMenu = () => {
    return (
        <div className="quick-filters-menu">
            <ul className="quick-filters-menu__list">
                <li className="quick-filters-menu__list-item"><div className="quick-filters-menu__list-item-text">Новинки</div></li>
                <li className="quick-filters-menu__list-item quick-filters-menu__list-item_active"><div className="quick-filters-menu__list-item-text">Сладкие</div></li>
                <li className="quick-filters-menu__list-item"><div className="quick-filters-menu__list-item-text">Хит</div></li>
                <li className="quick-filters-menu__list-item"><div className="quick-filters-menu__list-item-text">Крепкие</div></li>
                <li className="quick-filters-menu__list-item"><div className="quick-filters-menu__list-item-text">Лонг</div></li>
                <li className="quick-filters-menu__list-item"><div className="quick-filters-menu__list-item-text">Шот</div></li>
            </ul>
        </div>
    );
};

export default QuickFiltersMenu;