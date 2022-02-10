import { TStore } from 'components/redux';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { logInUser } from '../redux/asyncActions';
import BaseAlert from '../alert/baseAlert';
import TextField from './textField';
import './forms.scss';

function FormLogIn(): JSX.Element {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state: TStore) => state.user);
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

  const showAlert = (): JSX.Element | null => {
    if (show && user.name) {
      return <BaseAlert variant="success" text="Successfully completed" />;
    }
    if (show && !user.name) {
      return <BaseAlert variant="danger" text="User not found" />;
    }

    return null;
  };

  useEffect(() => {
    showAlert();
  }, [user.name]);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validate}
        onSubmit={(values, actions) => {
          logInUser(values)(dispatch);
          setShow(true);
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
      {showAlert()}
    </>
  );
}
export default FormLogIn;
