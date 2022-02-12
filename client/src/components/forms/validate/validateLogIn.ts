import * as Yup from 'yup';

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
