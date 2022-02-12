import * as Yup from 'yup';
import { searchCity } from '../../../server/api';

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
    .test('isCityValid', 'invalid city', async (value) => {
      try {
        const isCityValid = await searchCity({ city: value });

        return isCityValid;
      } catch (error) {
        return false;
      }
    })
    .required('City is required'),
  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .max(84, 'Length must be no more than 84 characters')
    .required('Address is required'),
});
