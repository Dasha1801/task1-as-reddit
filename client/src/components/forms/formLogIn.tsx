import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ILogInUser } from '../../shared/interfaces';
import { route } from '../../utils';
import BasePopover from '../alert/basePopover';
import FormBtns from '../btnsGroup/formBtns';
import { TStore } from '../redux';
import { getSavedArticles, logInUser } from '../redux/asyncActions';
import TextField from './fields/textField';
import { validateLogIn } from './validate';
import './forms.scss';

function FormLogIn(): JSX.Element {
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const { show } = useSelector((state: TStore) => state.popoverAuth);
  const dispatch = useDispatch();

  const handleLogIn = (data: ILogInUser): void => {
    logInUser(data, route.logIn)(dispatch);
  };

  useEffect(() => {
    getSavedArticles(accessToken)(dispatch);
  }, [accessToken, dispatch]);

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
      {!accessToken && show && <BasePopover variant="danger" text="User not found!" />}
    </>
  );
}
export default FormLogIn;
