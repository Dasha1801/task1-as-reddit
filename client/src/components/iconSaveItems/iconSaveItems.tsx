import React, { useEffect } from 'react';
import { HiSave } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../redux';
import { getSavedArticles } from '../redux/asyncActions';
import './iconSaveItems.scss';

function IconSaveItems(): JSX.Element {
  const dispatch = useDispatch();
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const countSaveItems = savedArticles.length;

  useEffect(() => {
    if (accessToken) getSavedArticles(accessToken)(dispatch);
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
