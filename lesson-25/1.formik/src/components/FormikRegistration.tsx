import React, { FormEvent, useState } from 'react';
import { Validator } from '../types/validators';

const initialValidators: Record<string, Validator> = {
  name: {
    isError: true,
  },
  email: {
    isError: true,
  },
  password: {
    isError: true,
  },
  repeatedPassword: {
    isError: true,
  },
};

const FormikRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [validators, setValidators] = useState(initialValidators);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (Object.keys(validators).every((key) => !validators[key].isError)) {
      alert('Форма отправлена');
    } else {
      alert('Ошибка заполнения');
    }
    e.preventDefault();
  };

  const validate = (propName: string, isError: boolean, helperText: string) => {
    setValidators({
      ...validators,
      [propName]: {
        isError,
        helperText: isError ? helperText : '',
      },
    });
  };

  const validateName = (nameValue: string) => {
    validate('name', !/^[А-яёЁ]+$/.test(nameValue), 'Только кириллические символ');
  };

  const validateEmail = (value: string) => {
    validate('email', !/^[A-z0-9]+@[A-z0-9]+.[A-z]+$/.test(value), 'Неверный email');
  };

  const validatePassword = (value: string) => {
    const helperText = [];
    if (value.length < 6) {
      helperText.push('Пароль дожен содержать не менее 6-и символов');
    }
    const isError = !/^[A-z]+$/.test(value);
    helperText.push(isError ? ' Содержит недопустимые символы' : '');
    validate('password', isError, helperText.toString());
  };

  const validateRepeatedPassword = () => {
    validate('repeatedPassword', !(password === repeatedPassword), 'пароли не совпадают');
  };

  return (
    <div className="formik-registration">
      <h2>Formik регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Имя: <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validateName(e.target.value)}
          />
          {validators.name.helperText}
        </div>
        <div>
          E-mail: <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validateEmail(e.target.value)}
          />
          {validators.email.helperText}
        </div>
        <div>
          Пароль: <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => validatePassword(e.target.value)}
          />
          {validators.password.helperText}
        </div>
        <div>
          Повторите пароль: <input
            name="repeatedPassword"
            type="password"
            value={repeatedPassword}
            onChange={(e) => setRepeatedPassword(e.target.value)}
            onBlur={validateRepeatedPassword}
          />
          {validators.repeatedPassword.helperText}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default FormikRegistration;
