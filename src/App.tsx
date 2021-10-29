import React from 'react';
import { FinancialStatus } from './components';
import GlobalStyle from './globalStyle';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import './App.css';


export const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <div className='wrapper'>
        <Switch>
          <Route path='/registration' component={SignUpPage} />
          <Route path='/' component={FinancialStatus} />
        </Switch>
      </div>
    </BrowserRouter>
  )
    ;
};