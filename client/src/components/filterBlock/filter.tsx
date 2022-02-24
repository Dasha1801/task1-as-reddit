import React, { useState } from 'react';
import { sortFilters } from '../../utils';
import { filters } from '../../shared/mocks';
import { IFilters } from '../../shared/interfaces';
import './filter.scss';

function Filter(): JSX.Element {
  const [items, setItems] = useState(filters);
  const [currentFilter, setCurrentFilter] = useState<IFilters>({ name: '', id: '', order: 0 });

  const dragStartHandler = (e: React.DragEvent<HTMLSpanElement>, item: IFilters): void => {
    setCurrentFilter(item);
    (e.target as Element).classList.add('opacity');
  };
  const dragLeaveHandler = (e: React.DragEvent<HTMLSpanElement>): void => {
    (e.target as Element).classList.remove('active');
  };
  const dragEndHandler = (e: React.DragEvent<HTMLSpanElement>): void => {
    (e.target as Element).classList.remove('active');
    (e.target as Element).classList.remove('opacity');
  };
  const dragOverHandler = (e: React.DragEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    (e.target as Element).classList.add('active');
  };

  const dropHandler = (e: React.DragEvent<HTMLSpanElement>, item: IFilters): void => {
    e.preventDefault();
    (e.target as Element).classList.remove('active');
    setItems(
      items.map((el) => {
        if (el.id === currentFilter.id) {
          return { ...el, order: item.order };
        }

        if (el.id === item.id) {
          return { ...el, order: currentFilter.order };
        }

        return el;
      })
    );
  };

  return (
    <div className="itemSidebar">
      <header className="title">Filter by flair</header>
      <div className="contentSidebar filters">
        {items.sort(sortFilters).map((item) => (
          <div
            draggable
            key={item.id}
            className="filter"
            data-testid="filter"
            onDragStart={(e) => dragStartHandler(e, item)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
