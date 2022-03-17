import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../product/product';
import { TStore } from '../redux';
import PopoverService from '../popoverService/popover';
import { products } from '../../shared/mocks';
import { fetchSavedServices } from '../redux/asyncActions';

function ListProducts(): JSX.Element {
  const dispatch = useDispatch();
  const { text, isShow } = useSelector((state: TStore) => state.popoverService).popoverService;
  useEffect(() => {
    fetchSavedServices()(dispatch);
  }, [dispatch]);

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
