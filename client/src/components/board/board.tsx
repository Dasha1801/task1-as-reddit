import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CgAdd } from 'react-icons/cg';
import { IColumn } from '../../shared/interfaces';
import { columnsBoard } from '../../shared/mocks';
import { onDragEnd } from '../../utils';
import ModalCreateToDo from '../modal/modalCreateTodo';
import './board.scss';

function Board(): JSX.Element {
  const [columns, setColumns] = useState(columnsBoard);
  const [show, setShow] = useState(false);

  const renderListItem = (column: IColumn): JSX.Element[] =>
    column.items.map((item, idx) => (
      <Draggable key={item.id} draggableId={item.id} index={idx}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="itemColumn"
            style={{
              backgroundColor: snapshot.isDragging ? '#3a3a3ac4' : '#0076d1',
              ...provided.draggableProps.style,
            }}
          >
            {item.content}
          </div>
        )}
      </Draggable>
    ));

  return (
    <div className="board">
      <h5 className="titleToDo">
        Create your ToDo <CgAdd className="iconAddToDo" onClick={() => setShow(!show)} />
      </h5>
      <div className="wrapperColumns">
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => (
            <div className="itemsColumn" key={columnId}>
              <div className="wrapperColumn">
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => (
                    <div
                      className="column"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? '#dae0e6' : '#67bdff55',
                      }}
                    >
                      <h5 className="nameColumn">{column.name}</h5>
                      {renderListItem(column)}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </DragDropContext>
        <ModalCreateToDo show={show} setState={setShow} />
      </div>
    </div>
  );
}

export default Board;
