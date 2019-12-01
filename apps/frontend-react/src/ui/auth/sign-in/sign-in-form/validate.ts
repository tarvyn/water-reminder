import { emailIsValid, passwordIsComplexEnough } from '@react-client/shared/models/validators/auth-validators';
import { SignInFormData } from '@react-client/ui/auth/sign-in/sign-in-form/sign-in-form';

export const validate = (values: SignInFormData) => {
  const errors = {} as Record<keyof SignInFormData, string>;
  const requiredFields: Array<keyof SignInFormData> = ['email', 'password'];

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

  return errors;
};
