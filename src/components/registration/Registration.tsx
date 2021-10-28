import React, { useState } from 'react';
import s from './Registration.module.css';
import { Input } from '../input/Input';

export const Registration = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={s.registration}>
      <h2>Регистрация</h2>
      <Input type={'text'} placeholder={'Введите login'} value={login} setValue={setLogin} />
      <Input type={'password'} placeholder={'Введите пароль'} value={password} setValue={setPassword} />
      <button>Войти</button>
    </div>
  );
};