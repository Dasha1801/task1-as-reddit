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
      <div className="wrapperInfo">
        <img className="img" src={product.photo} alt="images product" />
        <InfoProduct product={product} />
      </div>
      <div className="containerService">
        <Delivery />
        <Services id={product.serviceId} />
        <OptionsGroup />
      </div>
    </div>
  );
}

export default Product;
