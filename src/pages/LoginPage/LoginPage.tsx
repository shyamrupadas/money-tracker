import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AuthInput } from '../../shared/AuthInput';
import { loginUser } from '../../store/authSlice';
import styled from 'styled-components';
import { Button, Link, Typography } from '@mui/material';

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
      <Typography variant={'h4'} >
        Вход
      </Typography>
      {error &&
      <>
        <h4>Ошибка входа</h4>
        <p>{error}</p>
      </>
      }
      <AuthInput type={'text'} placeholder={'Введите login'} value={login} setValue={setLogin} />
      <AuthInput type={'password'} placeholder={'Введите пароль'} value={password} setValue={setPassword} />
      <ButtonPanel>
        <Button
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => dispatch(loginUser({ login, password }))}
        >
          Войти
        </Button>
        <Button
          variant="outlined"
          onClick={resetForm}
        >
          Сбросить
        </Button>
      </ButtonPanel>
      <Typography>
        Вы также можете&nbsp;
        <Link href="/signup" underline="hover">
          зарегистрироваться
        </Link>
      </Typography>
    </LoginForm>
  );
};

const ButtonPanel = styled.div`
  button {
    margin-top: 20px;
    margin-bottom: 20px;
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