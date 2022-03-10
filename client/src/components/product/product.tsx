import React from 'react';
import InfoProduct from '../infoProduct/infoProduct';
import Delivery from '../delivery/delivery';
import Services from '../extraServices/services';
import OptionsGroup from '../optionsGroup/optionsGroup';
import './product.scss';

function Product(): JSX.Element {
  return (
    <div className="product">
      <div className="img" />
      <div className="wrapperInfo">
        <InfoProduct />
        <Delivery />
        <Services />
        <OptionsGroup />
      </div>
    </div>
  );
}

export default Product;
