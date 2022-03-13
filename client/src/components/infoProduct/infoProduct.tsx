import React from 'react';
import { getRubles, getKopecks } from '../../utils';
import { IItemProduct } from '../../shared/interfaces';
import './infoProduct.scss';

function InfoProduct({ product }: IItemProduct): JSX.Element {
  const { name, code, price } = product;

  return (
    <div className="info">
      <div className="named">
        <h3 className="nameProduct">{name}</h3>
        <h5 className="codeProduct">Код товара: {code}</h5>
      </div>
      <div className="counterProduct">
        <div className="iconProduct remove" />
        <div className="countProduct">1</div>
        <div className="iconProduct add" />
      </div>
      <h5 className="price">
        {getRubles(price)},<span className="kopecks">{getKopecks(price)} р.</span>
      </h5>
    </div>
  );
}

export default InfoProduct;
