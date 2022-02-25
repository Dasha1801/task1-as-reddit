import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CgAdd } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { IColumn } from '../../shared/interfaces';
import { onDragEnd } from '../../utils';
import ModalCreateToDo from '../modal/modalCreateTodo';
import { TStore } from '../redux';
import './board.scss';

function Board(): JSX.Element {
  const { board } = useSelector((state: TStore) => state);
  const [columns, setColumns] = useState(board);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setColumns(board);
  }, [board]);

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
            {item.task}
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
                <h5 className="nameColumn">{column.name}</h5>
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
