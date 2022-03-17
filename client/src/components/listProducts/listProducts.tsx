import React from 'react';
import { useSelector } from 'react-redux';
import { products } from '../../shared/mocks';
import PopoverService from '../popoverService/popover';
import Product from '../product/product';
import { TStore } from '../redux';

function ListProducts(): JSX.Element {
  const { text, isShow } = useSelector((state: TStore) => state.popoverService).popoverService;

  return (
    <div>
      {products.map((el) => (
        <Product product={el} key={el.code} />
      ))}
      {isShow && <PopoverService text={text} />}
    </div>
  );
}

export default ListProducts;
