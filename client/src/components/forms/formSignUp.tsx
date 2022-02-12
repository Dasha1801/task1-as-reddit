import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { registerUser } from '../../server/api';
import { IPropsForm, IRegisterUser } from '../../shared/interfaces';
import { validateSignUp } from './validate/validateSignUp';
import TextField from './textField';
import FormBtns from '../btnsGroup/formBtns';
import BaseAlert from '../alert/baseAlert';
import './forms.scss';

function FormLogIn({ setState }: IPropsForm): JSX.Element {
  const [showAlert, setShowAlert] = useState(false);

  const handleRegister = async (data: IRegisterUser): Promise<void> => {
    try {
      const response = await registerUser(data);
      if (typeof response === 'object') setState(false);
    } catch {
      setShowAlert(true);
    }
  };

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
            <TextField label="City:" name="city" type="text" />
            <TextField label=" Address:" name="address" type="text" />
            <FormBtns />
          </Form>
        )}
      </Formik>
      {showAlert && (
        <BaseAlert text="Failed! Email is already in use!" variant="danger" setState={setShowAlert} />
      )}
    </>
  );
}
export default FormLogIn;
