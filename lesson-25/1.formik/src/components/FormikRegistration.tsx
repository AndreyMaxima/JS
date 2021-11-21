import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { isEmptyObject } from '../utils/common';

interface FormValues {
  name?: string,
  email?: string,
  password?: string,
  passwordAgain?: string,
}

const initialFormValues: FormValues = {
  name: 'Ольга',
  email: 'any@ex.com',
  password: '',
  passwordAgain: '',
};

const FormikRegistration = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const validateName = (nameValue: string) => (!/^[А-яёЁ]+$/.test(nameValue) ? 'Только кириллические символ' : '');

  const validateEmail = (value: string) => (!/^[A-z0-9]+@[A-z0-9]+.[A-z]+$/.test(value) ? 'Неверный email' : '');

  const validatePassword = (value: string) => {
    const helperText = [];
    if (value.length < 6) {
      helperText.push('Пароль дожен содержать не менее 6-и символов');
    }
    helperText.push(!/^[A-z]+$/.test(value) ? ' Содержит недопустимые символы' : '');
    return helperText.toString();
  };

  const validateRepeatedPassword = (password: string, repeatedPassword: string) => (!(password === repeatedPassword) ? 'пароли не совпадают' : '');

  return (
    <div className="formik-registration">
      <h2>Formik регистрация</h2>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validate={(values: FormValues) => {
          const errors: FormValues = {};
          errors.name = validateName(values.name || '');
          errors.email = validateEmail(values.email || '');
          errors.password = validatePassword(values.password || '');
          errors.passwordAgain = validateRepeatedPassword(values.password || '', values.passwordAgain || '');
          return isEmptyObject(errors) ? {} : errors;
        }}
      >
        {() => (
          <Form>
            <div>
              Имя: <Field
                name="name"
                type="text"
              />
              <ErrorMessage name="name" />
            </div>
            <div>
              E-mail: <Field
                name="email"
                type="text"
              />
              <ErrorMessage name="email" />
            </div>
            <div>
              Пароль: <Field
                name="password"
                type="password"
              />
              <ErrorMessage name="password" />
            </div>
            <div>
              Повторите пароль: <Field
                name="passwordAgain"
                type="password"
              />
              <ErrorMessage name="passwordAgain" />
            </div>
            <button type="submit">Зарегистрироваться</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikRegistration;
