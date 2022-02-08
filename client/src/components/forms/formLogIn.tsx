import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import TextField from './textField';
import './forms.scss';

function FormLogIn(): JSX.Element {
  const validate = Yup.object({
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
      initialValues={{ email: '', password: '' }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="form">
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
