import React, { useEffect, useState } from 'react';
import { IIdService, IItemServices } from '../../shared/interfaces';
import { dataServices } from '../../shared/mocks';
import ItemService from '../itemService/itemService';
import ServicesMenu from '../servicesMenu/servicesMenu';
import './services.scss';

function Services({ id }: IIdService): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const itemsService = dataServices[id];

  const handlerClick = (): void => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showMenu ? document.body.classList.add('noneScroll') : document.body.classList.remove('noneScroll');
  }, [showMenu]);

  const renderServices = (items: IItemServices[]): JSX.Element[] =>
    items.slice(0, 2).map((el) => <ItemService info={el} key={el.id} />);

  return (
    <>
      <div>
        {id ? (
          <div className="services">
            <h3 className="titleServices">Дополнительные услуги</h3>
            {renderServices(itemsService)}
            {itemsService.length > 2 && (
              <div className="allServices" onClick={handlerClick}>
                Все услуги
              </div>
            )}
          </div>
        ) : null}
      </div>
      {showMenu && (
        <ServicesMenu changeShowMenu={handlerClick} itemsService={itemsService} showMenu={showMenu} />
      )}
    </>
  );
}

export default Services;
