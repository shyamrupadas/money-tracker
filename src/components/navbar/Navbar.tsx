import React from 'react';
import s from './navbar.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../store/authSlice';

export const Navbar: React.FC = () => {
  const { isAuth, currentUser } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <img src={logo} alt='' className={s.logo} />
        <div className={s.header}>Money tracker</div>
        {!isAuth && <div className={s.login}><NavLink to='/login'>Войти</NavLink></div>}
        {!isAuth && <div className={s.registration}><NavLink to='/signup'>Регистрация</NavLink></div>}
        {isAuth && <div className={s.registration}>Привет, {currentUser.userName}</div>}
        {isAuth && <div className={s.registration} onClick={() => dispatch(logout())}>Выйти</div>}
      </div>
    </nav>
  );
};