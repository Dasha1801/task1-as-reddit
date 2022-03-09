import React from 'react';
import './itemService.scss';

function ItemService(): JSX.Element {
  return (
    <div className="wrapperItem">
      <div className="itemService">
        <input type="checkbox" className="checkbox" />
        <h5 className="nameService">Сертификат «Негарантийный ремонт» на 1 год</h5>
        <div className="priceService">
          314,<span className="kopecks">85 р.</span>
        </div>
      </div>
      <p className="descriptionService">
        Ремонт устройства - 1 раз, консультация по эксплуатации - неограниченное количество раз в течение 12
        месяцев в компании «Единый Сервисный Центр»...
        <span className="moreInfo">Подробнее</span>
      </p>
    </div>
  );
}

export default ItemService;
