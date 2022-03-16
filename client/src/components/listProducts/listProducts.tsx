import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Product from '../product/product';
import { products } from '../../shared/mocks';
import { fetchSavedServices } from '../redux/asyncActions';

function ListProducts(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSavedServices()(dispatch);
  }, [dispatch]);

  return (
    <div>
      {products.map((el) => (
        <Product product={el} key={el.code} />
      ))}
    </div>
  );
}

export default ListProducts;
