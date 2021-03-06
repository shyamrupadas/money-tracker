import React, { useEffect } from 'react';
import { AccountsPage } from '../pages/AccountsPage';
import GlobalStyle from '../globalStyle';
import { Header } from '../features/Header';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SignUpPage } from '../pages/SignUpPage';
import './App.css';
import { LoginPage } from '../pages/LoginPage';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { authUser } from '../store/authSlice';


export const App = () => {

  const { isAuth } = useAppSelector(state => state.authSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <div className='wrapper'>
        {!isAuth ?
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignUpPage} />
            <Redirect to='/login' />
          </Switch>
          :
          <Switch>
            <Route path='/' component={AccountsPage} />
            <Redirect to='/' />
          </Switch>
        }
      </div>
    </BrowserRouter>
  )
    ;
};