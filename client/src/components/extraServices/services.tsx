import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IItemServices, ISavedService, IService } from '../../shared/interfaces';
import { dataServices } from '../../shared/mocks';
import ItemService from '../itemService/itemService';
import { TStore } from '../redux';
import { fetchSavedServices } from '../redux/asyncActions';
import ServicesMenu from '../servicesMenu/servicesMenu';
import './services.scss';

function Services({ id, code }: IService): JSX.Element {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { services } = useSelector((state: TStore) => state.service);
  const savedServices = services.filter((el) => el.productId === code);
  const itemsService = dataServices[id];

  useEffect(() => {
    fetchSavedServices()(dispatch);
  }, [dispatch]);

  const handlerClick = (): void => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    showMenu ? document.body.classList.add('noneScroll') : document.body.classList.remove('noneScroll');
  }, [showMenu]);

  const renderServices = (items: IItemServices[], savedItems: ISavedService[]): JSX.Element[] => {
    if (!savedItems.length) {
      return items.slice(0, 2).map((el) => <ItemService info={el} key={el.id} code={code} idService={id} />);
    }

    const getSavedItems = savedItems.reduce((acc, el) => {
      items.find((item) => item.id === el.serviceId && acc.push(item));

      return acc;
    }, [] as IItemServices[]);

    return getSavedItems.map((el) => (
      <ItemService info={el} key={el.id} checked code={code} idService={id} />
    ));
  };

  return (
    <>
      <div>
        {id ? (
          <div className="services">
            <h3 className="titleServices">Дополнительные услуги</h3>
            {renderServices(itemsService, savedServices)}
            {(itemsService.length > 2 || savedServices.length === 1) && (
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
