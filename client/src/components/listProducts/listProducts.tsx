import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSavedServices } from '../redux/asyncActions';
import { products } from '../../shared/mocks';
import PopoverService from '../popoverService/popover';
import Product from '../product/product';
import { TStore } from '../redux';
import { changeStatusUpdate } from '../redux/slices/serviceSlice';

function ListProducts(): JSX.Element {
  const dispatch = useDispatch();
  const { text, isShow } = useSelector((state: TStore) => state.popoverService).popoverService;

  useEffect(() => {
    dispatch(changeStatusUpdate(true));
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
