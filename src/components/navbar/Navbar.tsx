import React from 'react';
import s from './navbar.module.css'
import logo from '../../img/logo.png'

export const Navbar: React.FC = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <img src={logo} alt='' className={s.logo} />
        <div className={s.header}>Money tracker</div>
        <div className={s.login}>Войти</div>
       <div className={s.registration}>Регистрация</div>
      </div>
    </nav>
  );
};