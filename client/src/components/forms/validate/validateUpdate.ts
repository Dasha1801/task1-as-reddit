import * as Yup from 'yup';
import { findCity } from '../../../utils';

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
