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
      <div className="wrapperInfo" data-testid="infoProduct">
        <img className="img" src={product.photo} alt="images product" data-testid="image" />
        <InfoProduct product={product} />
      </div>
      <div className="containerService" data-testid="servicesProduct">
        <Delivery />
        <Services id={product.serviceId} code={product.code} />
        <OptionsGroup />
      </div>
    </div>
  );
}

export default Product;
