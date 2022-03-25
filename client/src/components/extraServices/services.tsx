import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IItemServices, ISavedService, IService } from '../../shared/interfaces';
import { dataServices } from '../../shared/mocks';
import { filterSavedServices, getSavedItems } from '../../utils';
import ItemService from '../itemService/itemService';
import { TStore } from '../redux';
import ServicesMenu from '../servicesMenu/servicesMenu';
import './services.scss';

function Services({ id, code }: IService): JSX.Element {
  const { isRerendering, services } = useSelector((state: TStore) => state.service);
  const [savedServices, setSavedServices] = useState(filterSavedServices(services, code));
  const [showMenu, setShowMenu] = useState(false);
  const itemsService = dataServices[id];

  const handlerClick = (): void => {
    setShowMenu(!showMenu);
  };

  const renderServices = (items: IItemServices[], savedItems: ISavedService[]): JSX.Element[] => {
    if (!savedItems.length) {
      return items.slice(0, 2).map((el) => <ItemService info={el} key={el.id} code={code} idService={id} />);
    }

    return getSavedItems(items, savedItems).map((el) => (
      <ItemService info={el} key={el.id + id} code={code} idService={id} />
    ));
  };

  useEffect(() => {
    if (isRerendering) setSavedServices(filterSavedServices(services, code));
  }, [isRerendering, services, code]);

  useEffect(() => {
    showMenu ? document.body.classList.add('noneScroll') : document.body.classList.remove('noneScroll');
  }, [showMenu]);

  return (
    <>
      <div>
        {id ? (
          <div className="services">
            <h3 className="titleServices">Дополнительные услуги</h3>
            {renderServices(itemsService, savedServices)}
            {itemsService.length > 2 && (
              <div className="allServices" onClick={handlerClick}>
                Все услуги
              </div>
            )}
          </div>
        ) : null}
      </div>
      {showMenu && (
        <ServicesMenu
          changeShowMenu={handlerClick}
          itemsService={itemsService}
          showMenu={showMenu}
          code={code}
          idService={id}
        />
      )}
    </>
  );
}

export default Services;
