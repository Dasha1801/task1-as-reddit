import React, { useState } from 'react';
import ItemService from '../itemService/itemService';
import { dataServices21vek } from '../../shared/mocks';
import { IItemServices21, IIdService } from '../../shared/interfaces';
import ServicesMenu from '../servicesMenu/servicesMenu';
import './services.scss';

function Services({ id }: IIdService): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);
  const itemsService = dataServices21vek[id];

  const changeShowMenu = (): void => setShowMenu(!showMenu);

  const renderServices = (items: IItemServices21[]): JSX.Element[] =>
    items.slice(0, 2).map((el) => <ItemService info={el} key={el.id} />);

  return (
    <>
      <div>
        {id ? (
          <div className="services">
            <h3 className="titleServices">Дополнительные услуги</h3>
            {renderServices(itemsService)}
            {itemsService.length > 2 && (
              <div className="allServices" onClick={changeShowMenu}>
                Все услуги
              </div>
            )}
          </div>
        ) : null}
      </div>
      {showMenu && <ServicesMenu changeShowMenu={changeShowMenu} itemsService={itemsService} />}
    </>
  );
}

export default Services;
