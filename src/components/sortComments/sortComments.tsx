import React from 'react';
import './sortComments.scss';

function SortComments(): JSX.Element {
  return (
    <div className="wrapperSort">
      <label htmlFor="sort" className="label">
        Sort By:
        <select className="selectSort" name="sort" data-testid="select">
          <option>Best</option>
          <option>Top</option>
          <option>New</option>
          <option>Old</option>
        </select>
      </label>
    </div>
  );
}

export default SortComments;
