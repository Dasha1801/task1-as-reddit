import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { IServicesMenu } from 'shared/interfaces';
import ItemServiceMenu from '../itemServiceMenu/itemServiceMenu';
import './servicesMenu.scss';

function ServicesMenu({ changeShowMenu, itemsService }: IServicesMenu): JSX.Element {
  const categories = Array.from(new Set(itemsService.map((el) => el.category.name)));
  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const showNewService = (category: string): void => {
    setCurrentCategory(category);
  };

  const renderItems = useCallback(
    (category: string): JSX.Element | JSX.Element[] => {
      const items = itemsService.filter((el) => el.category.name === category);

      return (
        <>
          {items.map((el) => (
            <ItemServiceMenu info={el} key={el.code} />
          ))}
        </>
      );
    },
    [itemsService]
  );

  const renderTabs = useCallback(
    (category: string): JSX.Element => (
      <div className="tabGroup">
        {categories.map((el) => (
          <div
            className={classNames('tab', {
              active: el === category,
            })}
            key={el}
            onClick={() => showNewService(el)}
          >
            {el}
          </div>
        ))}
      </div>
    ),
    [categories]
  );

  useEffect(() => {
    renderTabs(currentCategory);
    renderItems(currentCategory);
  }, [currentCategory, renderTabs, renderItems]);

  return (
    <div className="menu" onClick={changeShowMenu}>
      <div className="wrapperContent" onClick={(e) => e.stopPropagation()}>
        <div className="closeMenu" onClick={changeShowMenu} />
        <div className="contentMenu">
          <h4 className="caption">Дополнительные услуги</h4>
          {renderTabs(currentCategory)}
          {renderItems(currentCategory)}
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;
