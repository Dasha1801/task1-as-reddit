import React from 'react';
import './delivery.scss';

function Delivery(): JSX.Element {
  return (
    <div className="wrapperDelivery">
      <div className="delivery">
        <h3 className="titleDelivery">Доставка:</h3>
        <span className="itemDelivery variant1">Курьером завтра</span>
        <span className="itemDelivery variant2">Самовывоз сегодня</span>
      </div>
    </div>
  );
}

export default Delivery;
