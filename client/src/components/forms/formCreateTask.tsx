import { Form, Formik } from 'formik';
import { v4 as uuid } from 'uuid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import TaskField from './fields/taskField';
import { validateTask } from './validate';
import { addTask } from '../redux/slices/boardSlice';
import './forms.scss';
import { IItemBoard, IPropsCreateTask } from '../../shared/interfaces';

function FormCreateTask({ handleClose }: IPropsCreateTask): JSX.Element {
  const dispatch = useDispatch();

  const handleCreate = (task: IItemBoard): void => {
    dispatch(addTask(task));
  };

  return (
    <Formik
      initialValues={{ task: '', description: '' }}
      validationSchema={validateTask}
      onSubmit={(values, { resetForm }) => {
        handleCreate({ ...values, id: uuid() });
        handleClose();
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
            Add task
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default FormCreateTask;
