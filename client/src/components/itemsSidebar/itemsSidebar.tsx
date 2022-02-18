import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { rules } from '../../shared/mocks';
import { IRulesSubreddit } from '../../shared/interfaces';
import ItemSidebar from './itemSidebar';
import './itemsSidebar.scss';

const getItemStyle = (isDragging: boolean, draggableStyle: any): object => ({
  background: isDragging ? '#0076d1' : 'white',
  color: isDragging ? 'white' : '#1a1a1b',
  ...draggableStyle,
});

function ItemsSidebar(): JSX.Element {
  const [allItems, setAllItems] = useState<IRulesSubreddit[]>(rules);

  const renderListItem = (): JSX.Element[] =>
    allItems.map((el, index) => (
      <Draggable key={el.id} draggableId={el.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
          >
            <ItemSidebar item={el} key={el.id} />
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
    <div className="itemsSidebar">
      <header className="title">r/javascript Rules</header>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="rules">
          {(provided) => (
            <ol className="contentSidebar" {...provided.droppableProps} ref={provided.innerRef}>
              {renderListItem()}
            </ol>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ItemsSidebar;
