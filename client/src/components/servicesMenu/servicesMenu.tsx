import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IServicesMenu } from '../../shared/interfaces';
import ItemServiceMenu from '../itemServiceMenu/itemServiceMenu';
import TabList from '../tabList/tabList';
import { timeout } from '../../constants';
import './servicesMenu.scss';

function ServicesMenu({ changeShowMenu, itemsService, showMenu }: IServicesMenu): JSX.Element {
  const [isAnimation, setIsAnimation] = useState(showMenu);
  const categories = Array.from(new Set(itemsService.map((el) => el.category.name)));
  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const close = (): void => {
    setIsAnimation(!isAnimation);
    setTimeout(() => {
      changeShowMenu();
    }, timeout);
  };

  const renderItems = useCallback(
    (category: string): JSX.Element | JSX.Element[] => {
      const items = itemsService.filter((el) => el.category.name === category);

      return (
        <div className="wrapperItemServiceMenu">
          {items.map((el) => (
            <ItemServiceMenu info={el} key={el.id} />
          ))}
        </div>
      );
    },
    [itemsService]
  );

  useEffect(() => {
    renderItems(currentCategory);
  }, [currentCategory, renderItems]);

  return (
    <div className="menu" onClick={close} data-testid="menuServices">
      <CSSTransition in={isAnimation} timeout={timeout} classNames="animation-menu" unmountOnExit appear>
        <div className="wrapperContent" onClick={(e) => e.stopPropagation()}>
          <div className="closeMenu" onClick={close} data-testid="closeMenu" />
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
      </CSSTransition>
    </div>
  );
}

export default ServicesMenu;
