import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { TStore } from '../redux';
import { ISideBar } from '../../shared/interfaces';
import Rules from '../rules/rules';
import Table from '../tableSidebar/table';
import Community from '../communityBlock/community';
import Filter from '../filterBlock/filter';
import Moderators from '../moderators/moderators';

function Sidebar(): JSX.Element {
  const itemsSidebar: ISideBar[] = [
    { el: <Community />, id: 's1' },
    { el: <Rules />, id: 's2' },
    { el: <Table />, id: 's3' },
    { el: <Filter />, id: 's4' },
    { el: <Moderators />, id: 's5' },
  ];

  const { loading } = useSelector((state: TStore) => state.loading);
  const [allItems, setAllItems] = useState<ISideBar[]>(itemsSidebar);

  const renderListItem = (): JSX.Element[] =>
    allItems.map((el, index) => (
      <Draggable key={el.id} draggableId={el.id} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {el.el}
          </div>
        )}
      </Draggable>
    ));

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(allItems);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setAllItems(items);
  };

  return (
    <aside className="sidebar" data-testid="sidebar">
      {!loading && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="rules">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {renderListItem()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </aside>
  );
}

export default Sidebar;
