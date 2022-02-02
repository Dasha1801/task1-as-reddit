import { TStore } from 'components/redux';
import { sortBy } from 'components/redux/slices/commentsSlice';
import { changeSortType, TSort } from 'components/redux/slices/sortSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './sortComments.scss';

function SortComments(): JSX.Element {
  const dispatch = useDispatch();
  const { sortType } = useSelector((state: TStore) => state.sortType);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(sortBy(event.target.value as TSort));
    dispatch(changeSortType({ sortType: event.target.value as TSort }));
  };

  return (
    <div className="wrapperSort">
      <label htmlFor="sort" className="label">
        Sort By:
        <select
          className="selectSort"
          name="sort"
          data-testid="select"
          onChange={onChangeHandler}
          value={sortType}
        >
          <option value="new">New</option>
          <option value="top">Top</option>
          <option value="old">Old</option>
        </select>
      </label>
    </div>
  );
}

export default SortComments;
