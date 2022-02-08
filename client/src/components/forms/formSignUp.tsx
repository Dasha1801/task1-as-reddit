import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import './forms.scss';
import TextField from './textField';

function FormLogIn(): JSX.Element {
  const validate = Yup.object({
    name: Yup.string()
      .min(6, 'Name must be at least 6 characters')
      .max(84, 'Length must be no more than 84 characters')
      .required('Name is required'),
    phone: Yup.string()
      .matches(
        /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        "That doesn't look like a phone number"
      )
      .length(13, 'Phone must be 13 characters')
      .required('Phone is required'),
    email: Yup.string()
      .email('Email is invalid')
      .max(84, 'Length must be no more than 84 characters')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(84, 'Length must be no more than 84 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
      address: Yup.string()
      .min(12, 'Address must be at least 20 characters')
      .max(84, 'Length must be no more than 84 characters')
      .required('Name is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        phone: '+375',
        city: '',
        address: '',
      }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="form">
          <TextField label="Name:" name="name" type="text" />
          <TextField label="Phone:" name="phone" type="text" />
          <TextField label="Email:" name="email" type="email" />
          <TextField label="Password:" name="password" type="password" />
          <TextField label="Confirm Password:" name="confirmPassword" type="password" />
          <TextField label="City:" name="city" type="text" />
          <TextField label=" Address:" name="address" type="text" />
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
