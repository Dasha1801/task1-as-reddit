import * as Yup from 'yup';
import { findCity } from '../../../utils';

export const validateLogIn = Yup.object({
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

export const validateSignUp = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, "That doesn't look like a phone number")
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
  city: Yup.string()
    .test('isCityValid', 'invalid city', (value): boolean => {
      const isCityValid = value && findCity(value);

      return isCityValid !== -1;
    })
    .required('City is required!'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Address is required'),
});

export const validateUpdate = Yup.object({
  phone: Yup.string()
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, "That doesn't look like a phone number")
    .length(13, 'Phone must be 13 characters')
    .required('Phone is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Password is required'),
  city: Yup.string()
    .test('isCityValid', 'invalid city', (value): boolean => {
      const isCityValid = value && findCity(value);

      return isCityValid !== -1;
    })
    .required('City is required!'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Address is required'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Name is required'),
});

export const validateTask = Yup.object({
  task: Yup.string()
    .min(4, 'Task must be at least 4 characters')
    .max(40, 'Length must be no more than 40 characters')
    .required('Task is required'),
  description: Yup.string()
    .min(6, 'Description must be at least 6 characters')
    .required('Description is required'),
});
