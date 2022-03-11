import React, { useCallback, useEffect, useState } from 'react';
import { IServicesMenu } from 'shared/interfaces';
import ItemServiceMenu from '../itemServiceMenu/itemServiceMenu';
import TabList from '../tabList/tabList';
import './servicesMenu.scss';

function ServicesMenu({ changeShowMenu, itemsService }: IServicesMenu): JSX.Element {
  const categories = Array.from(new Set(itemsService.map((el) => el.category.name)));
  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const renderItems = useCallback(
    (category: string): JSX.Element | JSX.Element[] => {
      const items = itemsService.filter((el) => el.category.name === category);

      return (
        <>
          {items.map((el) => (
            <ItemServiceMenu info={el} key={el.id} />
          ))}
        </>
      );
    },
    [itemsService]
  );

  useEffect(() => {
    renderItems(currentCategory);
  }, [currentCategory, renderItems]);

  return (
    <div className="menu" onClick={changeShowMenu}>
      <div className="wrapperContent" onClick={(e) => e.stopPropagation()}>
        <div className="closeMenu" onClick={changeShowMenu} />
        <div className="contentMenu">
          <h4 className="caption">Дополнительные услуги</h4>
          <TabList
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
          {renderItems(currentCategory)}
        </div>
      </div>
    </div>
  );
}

export default ServicesMenu;
