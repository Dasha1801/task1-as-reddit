import React, { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { IModerator } from '../../shared/interfaces';
import { moderators } from '../../shared/mocks';
import './moderators.scss';

function Moderators(): JSX.Element {
  const [allItems, setAllItems] = useState<IModerator[]>(moderators);

  const renderListItem = (): JSX.Element[] =>
    allItems.map((el, index) => (
      <Draggable key={el.id} draggableId={el.id} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <div key={el.id} className="wrapperModerator" data-testid="moderator">
              <span>{el.name}</span>
              {el.text && <span className="textModerator">{el.text}</span>}
            </div>
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
      <header className="title">Moderators</header>
      <div className="contentSidebar">
        <button type="button" className="btnMessage">
          <BiMessageDetail className="iconMessage" size={20} />
          Message the mods
        </button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="moderators">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {renderListItem()}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button type="button" className="btnModerators">
          view all moderators
        </button>
      </div>
    </div>
  );
}

export default Moderators;
