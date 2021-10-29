import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Input } from '../../components/input/Input';
import { registrationUser } from '../../store/authSlice';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setLogin('');
    setPassword('');
  };

  return (
    <LoginForm>
      <h2>Вход</h2>
      {error &&
      <>
        <h4>Ошибка входа</h4>
        <p>{error}</p>
      </>
      }
      <Input type={'text'} placeholder={'Введите login'} value={login} setValue={setLogin} />
      <Input type={'password'} placeholder={'Введите пароль'} value={password} setValue={setPassword} />
      <ButtonPanel>
        <button onClick={() => dispatch(registrationUser({ login, password }))}>Войти</button>
        <button onClick={resetForm}>Сбросить</button>
      </ButtonPanel>
      <div className="mt-3">
        Вы также можете&nbsp;
        <NavLink to='/signup'>
          зарегистрироваться
        </NavLink>
      </div>
    </LoginForm>
  );
};

const ButtonPanel = styled.div`
  button {
    display: flex;
    justify-content: space-between;
  }
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  border: darkgrey solid 1px;
  border-radius: 10px;
  align-self: center;
  margin-top: 100px;
`;