import React from 'react';
import Product from '../product/product';
import { products21 } from '../../shared/mocks';
import './listProducts.scss';

function ListProducts(): JSX.Element {
  return (
    <div>
      {products21.map((el) => (
        <Product product={el} key={el.code} />
      ))}
    </div>
  );
}

export default ListProducts;
