import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRegisterUser } from '../../shared/interfaces';
import FormBtns from '../btnsGroup/formBtns';
import { TStore } from '../redux';
import AutocompleteCity from './autocomplete/autocompleteCity';
import { updateProfile } from '../redux/asyncActions';
import TextField from './fields/textField';
import { validateUpdate } from './validate';
import BasePopover from '../alert/basePopover';
import './forms.scss';

function FormUpdate(): JSX.Element {
  const { name, email, accessToken, phone, city, address } = useSelector((state: TStore) => state.user).user;
  const { show } = useSelector((state: TStore) => state.popoverAuth);
  const dispatch = useDispatch();

  const handleUpdate = (props: IRegisterUser): void => {
    updateProfile(props)(dispatch);
  };

  return (
    <>
      <Formik
        initialValues={{
          name,
          phone,
          city,
          address,
          password: '',
        }}
        validationSchema={validateUpdate}
        onSubmit={(values) => {
          const data = { ...values, email };
          handleUpdate(data);
        }}
      >
        {(formik) => (
          <Form className="form" data-testid="formSignUp">
            <TextField label="Name:" name="name" type="text" />
            <TextField label="Phone:" name="phone" type="text" />
            <TextField label="Password:" name="password" type="password" />
            <TextField label=" Address:" name="address" type="text" />
            <AutocompleteCity setState={formik.setFieldValue} city={formik.values.city} />
            <FormBtns />
          </Form>
        )}
      </Formik>
      {!accessToken && show && <BasePopover variant="danger" text="Failed! Try again later!" />}
    </>
  );
}
export default FormUpdate;
