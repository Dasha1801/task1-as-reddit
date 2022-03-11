import classNames from 'classnames';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { ITabList } from 'shared/interfaces';
import './tabList.scss';

function TabList({ categories, setCurrentCategory, currentCategory }: ITabList): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const [scroll, setScroll] = useState({ isScroll: false, clientX: 0, scrollX: 0 });

  const showNewService = useCallback(
    (category: string): void => {
      setCurrentCategory(category);
    },
    [setCurrentCategory]
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      return;
    }
    e.preventDefault();

    const { isScroll, clientX, scrollX } = scroll;

    if (isScroll && ref.current !== null) {
      ref.current.scrollLeft = scrollX + e.clientX - clientX;
      setScroll({
        ...scroll,
        scrollX: scrollX + e.clientX - clientX,
        clientX: e.clientX,
      });
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (ref && ref.current && !ref.current.contains(e.target as Element)) {
      return;
    }
    e.preventDefault();

    setScroll({ ...scroll, isScroll: false });
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
            onClick={() => showNewService(el)}
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
      onMouseDown={(e) => onMouseDown(e)}
      onMouseUp={(e) => onMouseUp(e)}
      onMouseMove={(e) => onMouseMove(e)}
    >
      {renderTabs(currentCategory)}
    </div>
  );
}

export default TabList;
