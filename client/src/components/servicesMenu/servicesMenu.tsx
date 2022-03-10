import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { IItemServices21 } from 'shared/interfaces';
import './servicesMenu.scss';

interface IServicesMenu {
  changeShowMenu: () => void;
  itemsService: IItemServices21[];
}

function ServicesMenu({ changeShowMenu, itemsService }: IServicesMenu): JSX.Element {
  const categories = Array.from(new Set(itemsService.map((el) => el.category.name)));
  const [currentCategory, setCurrentCategory] = useState(categories[1]);

  const showNewService = (category: string): void => {
    setCurrentCategory(category);
  };

  const renderItems = (category: string): JSX.Element | JSX.Element[] => {
    const items = itemsService.filter((el) => el.category.name === category);

    return (
      <div>
        {items.map((el) => (
          <div className="itemServices" key={el.code}>
            <h6 className="nameService">{el.name}</h6>
            <p className="descriptionItem">{el.description}</p>
            <div className="moreInfo">Подробнее</div>
            <div className="priceService">{el.price}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderTabs = (category: string): JSX.Element => (
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
  );

  useEffect(() => {
    renderTabs(currentCategory);
    renderItems(currentCategory);
  }, [currentCategory]);

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
