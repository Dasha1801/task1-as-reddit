import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IPropsUpdateTask, IItemBoard } from '../../shared/interfaces';
import TaskField from './fields/taskField';
import { TStore } from '../redux';
import './forms.scss';
import { validateTask } from './validate';
import { updateBoard } from '../redux/slices/boardSlice';

function FormUpdateTask({ item, column, columnId }: IPropsUpdateTask): JSX.Element {
  const { board } = useSelector((state: TStore) => state.board);
  const dispatch = useDispatch();

  const handleUpdate = (task: IItemBoard): void => {
    const updateItems = board[columnId].items.filter((el) => el.id !== task.id);

    dispatch(updateBoard({ ...board, [columnId]: { ...column, items: [...updateItems, task] } }));
  };

  return (
    <Formik
      initialValues={item}
      validationSchema={validateTask}
      onSubmit={(values, { resetForm }) => {
        handleUpdate(values);
        resetForm();
      }}
    >
      {(formik) => (
        <Form className="form">
          <TaskField label="Task:" name="task" type="text" data-tag="input" />
          <TaskField label="Description:" name="description" data-tag="textarea" />
          <Button
            type="submit"
            className="mt-3 buttonSubmit"
            style={{ display: 'block', marginLeft: 'auto' }}
          >
            Update task
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default FormUpdateTask;
