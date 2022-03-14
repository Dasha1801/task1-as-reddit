import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ITabList } from '../../shared/interfaces';
import './tabList.scss';

function TabList({ categories, setCurrentCategory, currentCategory }: ITabList): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState({ isScroll: false, clientX: 0, scrollX: 0 });

  const showNewService = useCallback(
    (category: string): void => setCurrentCategory(category),
    [setCurrentCategory]
  );

  const scrollToCenter = (e: React.MouseEvent<HTMLDivElement>): void =>
    (e.target as Element).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'end' });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      return;
    }
    e.preventDefault();

    const { isScroll, clientX, scrollX } = scroll;

    if (isScroll && ref.current !== null) {
      const scrollLeft = scrollX + e.clientX - clientX;
      ref.current.scrollLeft = scrollLeft;

      setScroll({
        ...scroll,
        scrollX: scrollLeft,
        clientX: e.clientX,
      });
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      return;
    }
    e.preventDefault();
    setScroll({ isScroll: false, clientX: 0, scrollX: 0 });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      return;
    }
    e.preventDefault();

    setScroll({ ...scroll, isScroll: true, clientX: e.clientX });
  };

  const renderTabs = useCallback(
    (category: string): JSX.Element => (
      <>
        {categories.map((el) => (
          <div
            className={classNames('tab', {
              activeTab: el === category,
            })}
            key={el}
            onClick={(e) => {
              showNewService(el);
              scrollToCenter(e);
            }}
          >
            {el}
          </div>
        ))}
      </>
    ),
    [categories, showNewService]
  );

  useEffect(() => {
    renderTabs(currentCategory);
  }, [currentCategory, renderTabs]);

  return (
    <div
      className="tabGroup"
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
    >
      {renderTabs(currentCategory)}
    </div>
  );
}

export default TabList;
