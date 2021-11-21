import React, { FormEvent, useState } from 'react';
import { RegistrationValidators } from '../../types/validators';

const initialValidators: RegistrationValidators = {
  name: {
    isError: false,
    helperText: '',
  },
  email: {
    isError: false,
    helperText: '',
  },
  password: {
    isError: false,
    helperText: '',
  },
  repeatPassword: {
    isError: false,
    helperText: '',
  },
};

const Registration = () => {
  const [validators, setValidators] = useState(initialValidators);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Имя: <input name="name" type="text" />
      </div>
      <div>
        E-mail: <input name="email" type="text" />
      </div>
      <div>
        Пароль: <input name="password" type="password" />
      </div>
      <div>
        Повторите пароль: <input name="password" type="password" />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Registration;
