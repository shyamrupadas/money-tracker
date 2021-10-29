import React from 'react';
import { FinancialStatus } from './components';
import GlobalStyle from './globalStyle';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import './App.css';
import { LoginPage } from './pages/LoginPage';
import { useAppSelector } from './hooks/hooks';


export const App = () => {

  const { isAuth } = useAppSelector(state => state.authSlice);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <div className='wrapper'>
        {!isAuth &&
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
        }
        {isAuth &&
        <Switch>
          <Route path='/' component={FinancialStatus} />
        </Switch>
        }
      </div>
    </BrowserRouter>
  )
    ;
};