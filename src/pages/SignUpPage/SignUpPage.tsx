import React, { useState } from 'react';
import s from './SignUp.module.css';
import { Input } from '../../components/input/Input';
import { registrationUser } from '../../store/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignUpPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <div className={s.registration}>
      <h2>Регистрация</h2>
      {error &&
      <>
        <h4>Ошибка регистрации</h4>
        <p>{error}</p>
      </>
      }
      <Input type={'text'} placeholder={'Введите login'} value={login} setValue={setLogin} />
      <Input type={'password'} placeholder={'Введите пароль'} value={password} setValue={setPassword} />
      <ButtonPanel>
        <button onClick={() => dispatch(registrationUser({ login, password }))}>Зарегистрировать</button>
        <button onClick={resetForm}>Сбросить</button>
      </ButtonPanel>
      <div className="mt-3">
        Вы также можете&nbsp;
        <NavLink to='/login'>
          войти
        </NavLink>
      </div>
    </div>
  );
};

const ButtonPanel = styled.div`
  button {
    display: flex;
    justify-content: space-between;
  }
`;