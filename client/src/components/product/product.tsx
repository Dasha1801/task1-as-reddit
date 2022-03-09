import React from 'react';
import InfoProduct from '../infoProduct/infoProduct';
import Delivery from '../delivery/delivery';
import Services from '../extraServices/services';
import './product.scss';

function Product(): JSX.Element {
  return (
    <div className="product">
      <div className="img" />
      <div className="wrapperInfo">
        <InfoProduct />
        <Delivery />
        <Services />
      </div>
    </div>
  );
}

export default Product;
