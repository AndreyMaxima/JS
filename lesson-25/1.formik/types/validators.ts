export interface Validator {
  isError: boolean,
  helperText: string,
}

export interface RegistrationValidators {
  name: Validator;
  email: Validator;
  password: Validator;
  repeatPassword: Validator
}
