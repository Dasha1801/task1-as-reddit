import React from 'react';
import InfoProduct from '../infoProduct/infoProduct';
import Delivery from '../delivery/delivery';
import Services from '../extraServices/services';
import OptionsGroup from '../optionsGroup/optionsGroup';
import { IItemProduct } from '../../shared/interfaces';
import './product.scss';

function Product({ product }: IItemProduct): JSX.Element {
  return (
    <div className="product">
      <img className="img" src={product.photo} alt="images product" />
      <div className="wrapperInfo">
        <InfoProduct product={product} />
        <Delivery />
        <Services id={product.serviceId} />
        <OptionsGroup />
      </div>
    </div>
  );
}

export default Product;
