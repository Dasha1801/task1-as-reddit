import React from 'react';
import './delivery.scss';

function Delivery(): JSX.Element {
  return (
    <div className="wrapperDelivery">
      <div className="delivery">
        <h3 className="titleDelivery">Доставка:</h3>
        <div className="itemDelivery variant1">
          <img src="images/auto.png" alt="" />
          <span>Курьером завтра</span>
        </div>
        <div className="itemDelivery variant2">
          <img src="images/location.png" alt="" />
          <span>Самовывоз сегодня</span>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
