import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import { TStore } from '../redux';
import { validateLogIn } from './validate/validateLogIn';
import { getSavedArticles, logInUser } from '../redux/asyncActions';
import FormBtns from '../btnsGroup/formBtns';
import BaseAlert from '../alert/baseAlert';
import TextField from './textField';
import { ILogInUser } from '../../shared/interfaces';
import './forms.scss';

function FormLogIn(): JSX.Element {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state: TStore) => state.user);
  const dispatch = useDispatch();

  const handleLogIn = async (data: ILogInUser): Promise<void> => {
    await logInUser(data)(dispatch);
    setShow(true);
  };

  const showAlert = (): JSX.Element | null => {
    if (show && user.name) {
      getSavedArticles(user.accessToken)(dispatch);

      return <BaseAlert variant="success" text="Successfully completed" setState={setShow} />;
    }
    if (show && !user.name) {
      return <BaseAlert variant="danger" text="User not found!" setState={setShow} />;
    }

    return null;
  };

  useEffect(() => {
    showAlert();
  }, [user.name, show]);

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validateLogIn}
        onSubmit={(values) => {
          handleLogIn(values);
        }}
      >
        {(formik) => (
          <Form className="form" data-testid="formLogIn">
            <TextField label="Name:" name="name" type="text" />
            <TextField label="Email:" name="email" />
            <TextField label="Password:" name="password" />
            <FormBtns />
          </Form>
        )}
      </Formik>
      {showAlert()}
    </>
  );
}
export default FormLogIn;
