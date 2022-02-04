import React, { useEffect } from 'react';
import { HiSave } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSavedArticles } from '../../server/api';
import { TStore } from '../redux';
import { setSavedArticles } from '../redux/slices/savedArticlesSlice';
import './iconSaveItems.scss';

function IconSaveItems(): JSX.Element {
  const dispatch = useDispatch();
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  const countSaveItems = savedArticles.length;

  useEffect(() => {
    fetchSavedArticles().then((res) => dispatch(setSavedArticles(res)));
  }, [dispatch]);

  const renderCountSavedItem = (): JSX.Element | null => {
    if (!countSaveItems) {
      return null;
    }

    return (
      <span className="countSaveItems" data-testid="countItem">
        {countSaveItems}
      </span>
    );
  };

  return (
    <>
      <HiSave size={24} color="gray" className="iconSaveItems" data-testid="iconSavedItems" />
      {renderCountSavedItem()}
    </>
  );
}

export default IconSaveItems;
