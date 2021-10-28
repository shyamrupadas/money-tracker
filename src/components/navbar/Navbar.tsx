import React from 'react';
import s from './navbar.module.css'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <img src={logo} alt='' className={s.logo} />
        <div className={s.header}>Money tracker</div>
        <div className={s.login}><NavLink to='/login'>Войти</NavLink></div>
       <div className={s.registration}><NavLink to='/registration'>Регистрация</NavLink></div>
      </div>
    </nav>
  );
};