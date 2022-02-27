import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillDelete, AiOutlineEye } from 'react-icons/ai';
import { CgAdd } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { IColumn } from '../../shared/interfaces';
import ModalCreateToDo from '../modal/modalCreateTodo';
import ModalUpdateTask from '../modal/modalUpdateTask';
import { TStore } from '../redux';
import { onDragEnd } from '../redux/asyncActions';
import { updateBoard } from '../redux/slices/boardSlice';
import './board.scss';

function Board(): JSX.Element {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const { board } = useSelector((state: TStore) => state.board);
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const dispatch = useDispatch();

  const showDescription = (): void => setShowModalUpdate(!showModalUpdate);

  const handleDeleteTask = (columnId: string, id: string, column: IColumn): void => {
    const updateItems = board[columnId].items.filter((el) => el.id !== id);
    dispatch(updateBoard({ ...board, [columnId]: { ...column, items: updateItems } }));
  };

  const renderListItem = (column: IColumn, columnId: string): JSX.Element[] =>
    column.items.map((item, idx) => (
      <div key={item.id}>
        <Draggable draggableId={item.id} index={idx}>
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
              <div className="taskText">{item.task}</div>
              <div className="wrapperBtn">
                <AiOutlineEye className="eyeIcon" onClick={showDescription} data-testid="eyeIcon" />
                <AiFillDelete
                  data-testid="iconDeleteTask"
                  className="deleteBtn"
                  onClick={() => handleDeleteTask(columnId, item.id, column)}
                />
              </div>
            </div>
          )}
        </Draggable>

        <ModalUpdateTask
          show={showModalUpdate}
          setState={setShowModalUpdate}
          item={item}
          columnId={columnId}
          column={column}
        />
      </div>
    ));

  return (
    <div className="board">
      <h5 className="titleToDo">
        Create your ToDo
        <CgAdd
          className="iconAddToDo"
          onClick={() => setShowModalCreate(!showModalCreate)}
          data-testid="iconAddTask"
        />
      </h5>
      <div className="wrapperColumns">
        <DragDropContext onDragEnd={(result) => onDragEnd(result, board)(dispatch)}>
          {Object.entries(board).map(([columnId, column], index) => (
            <div className="itemsColumn" key={uuid()}>
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
        <ModalCreateToDo show={showModalCreate} setState={setShowModalCreate} />
      </div>
    </div>
  );
}

export default Board;
