import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logInUser } from '../redux/asyncActions';
import './forms.scss';
import TextField from './textField';

function FormLogIn(): JSX.Element {
  const dispatch = useDispatch();

  const validate = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(84, 'Length must be no more than 84 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .max(84, 'Length must be no more than 84 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(84, 'Length must be no more than 84 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        logInUser(values)(dispatch);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form className="form" data-testid="formLogIn">
          <TextField label="Name:" name="name" type="text" />
          <TextField label="Email:" name="email" />
          <TextField label="Password:" name="password" />
          <div className="buttons">
            <Button className="btn-danger mt-3" type="reset">
              Reset
            </Button>
            <Button type="submit" className="mt-3 buttonSubmit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default FormLogIn;
