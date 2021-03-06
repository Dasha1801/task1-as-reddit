import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../redux';
import { sortBy } from '../redux/slices/articleSlice';
import { changeSortType, TSort } from '../redux/slices/sortSlice';
import './sortComments.scss';

function SortComments(): JSX.Element | null {
  const dispatch = useDispatch();
  const { sortType } = useSelector((state: TStore) => state.sortType);
  const { comments } = useSelector((state: TStore) => state.article);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(sortBy(event.target.value as TSort));
    dispatch(changeSortType({ sortType: event.target.value as TSort }));
  };

  const countComments = comments.length;

  return countComments ? (
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
  ) : null;
}

export default SortComments;
