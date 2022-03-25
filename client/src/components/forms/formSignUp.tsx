import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRegisterUser } from '../../shared/interfaces';
import BasePopover from '../alert/basePopover';
import FormBtns from '../btnsGroup/formBtns';
import { TStore } from '../redux';
import { getSavedArticles, signUpUser } from '../redux/asyncActions';
import AutocompleteCity from './autocomplete/autocompleteCity';
import TextField from './fields/textField';
import { validateSignUp } from './validate';
import './forms.scss';

function FormSignUp(): JSX.Element {
  const { accessToken } = useSelector((state: TStore) => state.user).user;
  const { show } = useSelector((state: TStore) => state.popoverAuth);
  const dispatch = useDispatch();

  const handleRegister = (props: IRegisterUser): void => {
    signUpUser(props)(dispatch);
  };

  useEffect(() => {
    getSavedArticles(accessToken)(dispatch);
  }, [accessToken, dispatch]);

  return (
    <>
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
        validationSchema={validateSignUp}
        onSubmit={(values) => {
          const { confirmPassword, ...data } = values;
          handleRegister(data);
        }}
      >
        {(formik) => (
          <Form className="form" data-testid="formSignUp">
            <TextField label="Name:" name="name" type="text" />
            <TextField label="Phone:" name="phone" type="text" />
            <TextField label="Email:" name="email" type="email" />
            <TextField label="Password:" name="password" type="password" />
            <TextField label="Confirm Password:" name="confirmPassword" type="password" />
            <TextField label=" Address:" name="address" type="text" />
            <AutocompleteCity setState={formik.setFieldValue} city={formik.values.city} />
            <FormBtns />
          </Form>
        )}
      </Formik>
      {!accessToken && show && <BasePopover variant="danger" text="Failed! Email is already in use!" />}
    </>
  );
}
export default FormSignUp;
