import { TStore } from 'components/redux';
import React from 'react';
import { HiSave } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import './iconSaveItems.scss';

function IconSaveItems(): JSX.Element {
  const { savedArticles } = useSelector((state: TStore) => state.savedArticles);
  const countSaveItems = savedArticles.length;

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
      <HiSave
        size={24}
        color="gray"
        className="iconSaveItems"
        data-testid="iconSavedItems"
      />
      {renderCountSavedItem()}
    </>
  );
}

export default IconSaveItems;
