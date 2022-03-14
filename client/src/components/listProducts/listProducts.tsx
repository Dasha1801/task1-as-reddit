import React from 'react';
import Product from '../product/product';
import { products } from '../../shared/mocks';

function ListProducts(): JSX.Element {
  return (
    <div>
      {products.map((el) => (
        <Product product={el} key={el.code} />
      ))}
    </div>
  );
}

export default ListProducts;
