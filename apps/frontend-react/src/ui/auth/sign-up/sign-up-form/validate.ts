import {
  emailIsValid,
  nameIsValid,
  passwordIsComplexEnough
} from '@react-client/shared/models/validators/auth-validators';
import { SignUpFormData } from '@react-client/ui/auth/sign-up/sign-up-form/sign-up-form';

export const validate = (values: SignUpFormData) => {
  const errors = {} as Record<keyof SignUpFormData, string>;
  const requiredFields: Array<keyof SignUpFormData> = [
    'firstName',
    'lastName',
    'email',
    'password'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Field is required';
    }
  });

  if (values.email && !emailIsValid(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.password && !passwordIsComplexEnough(values.password)) {
    errors.password = 'Password is not complex enough';
  }

  if (values.firstName && !nameIsValid(values.firstName)) {
    errors.firstName = 'Invalid first name';
  }

  if (values.lastName && !nameIsValid(values.lastName)) {
    errors.lastName = 'Invalid last name';
  }

  return errors;
};
