import React, { useState } from 'react';
import s from './SignUp.module.css';
import { AuthInput } from '../../shared/AuthInput';
import { registrationUser } from '../../store/authSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import styled from 'styled-components';
import { Button, Link, Typography } from '@mui/material';

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
      <Typography variant={'h4'} >
        Регистрация
      </Typography>
      {error &&
      <>
        <h4>Ошибка регистрации</h4>
        <p>{error}</p>
      </>
      }
      <AuthInput type={'text'} placeholder={'Введите login'} value={login} setValue={setLogin} />
      <AuthInput type={'password'} placeholder={'Введите пароль'} value={password} setValue={setPassword} />
      <ButtonPanel>
        <Button
          onClick={() => dispatch(registrationUser({ login, password }))}
          variant="outlined"
          sx={{ mr: 2 }}
        >
          Зарегистрировать
        </Button>
        <Button
          onClick={resetForm}
          variant="outlined"
        >
          Сбросить
        </Button>
      </ButtonPanel>
      <Typography>
        Вы также можете&nbsp;
        <Link href="/login" underline="hover">
          войти
        </Link>
      </Typography>
    </div>
  );
};

const ButtonPanel = styled.div`
  button {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;