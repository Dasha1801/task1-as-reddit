import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { CgAdd } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { IColumn } from '../../shared/interfaces';
import ModalCreateToDo from '../modal/modalCreateTodo';
import { TStore } from '../redux';
import { onDragEnd } from '../../utils';
import { updateBoard } from '../redux/slices/boardSlice';
import './board.scss';

function Board(): JSX.Element {
  const { board } = useSelector((state: TStore) => state.board);
  const [columns, setColumns] = useState(board);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBoard(columns));
  }, [columns, dispatch]);

  useEffect(() => {
    setColumns(board);
  }, [board.tasks.items.length]);

  const handleDeleteTask = (columnId: string, id: string, column: IColumn): void => {
    const updateItems = columns[columnId].items.filter((el) => el.id !== id);

    setColumns({ ...columns, [columnId]: { ...column, items: updateItems } });
  };

  const renderListItem = (column: IColumn, columnId: string): JSX.Element[] =>
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
            <AiFillDelete className="deleteBtn" onClick={() => handleDeleteTask(columnId, item.id, column)} />
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
                      {renderListItem(column, columnId)}
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
