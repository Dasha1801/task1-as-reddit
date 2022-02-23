import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import TaskField from './field/taskField';
import { validateTask } from './validate';
import './forms.scss';

function FormCreateTask(): JSX.Element {
  return (
    <Formik
      initialValues={{ task: '', description: '' }}
      validationSchema={validateTask}
      onSubmit={(values) => {
        console.log(values);
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
