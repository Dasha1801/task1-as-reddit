import React from 'react';
import ItemService from '../itemService/itemService';
import './services.scss';

function Services(): JSX.Element {
  return (
    <div className="services">
      <h3 className="titleServices">Дополнительные услуги</h3>
      <ItemService />
      <ItemService />
      <div className="allServices">Все услуги</div>
    </div>
  );
}

export default Services;
