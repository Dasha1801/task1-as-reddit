import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { dataTable } from '../../shared/mocks';
import { IDataTable } from '../../shared/interfaces';
import HeaderTable from './headerTable';
import TrTable from './trTable';
import './table.scss';

function Table(): JSX.Element {
  const [allItems, setAllItems] = useState<IDataTable[]>(dataTable);

  const renderListItem = (): JSX.Element[] =>
    allItems.map((el, index) => (
      <Draggable key={el.id} draggableId={el.id} index={index}>
        {(provided) => (
          <div
            className="contentTable"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TrTable item={el} key={el.id} />
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
    <div className="itemSidebar">
      <header className="title">Upcoming meeting</header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="table">
          {(provided) => (
            <div className="tableWrapper" {...provided.droppableProps} ref={provided.innerRef}>
              <HeaderTable />
              {renderListItem()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Table;
