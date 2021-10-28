import React from 'react';
import { FinancialStatus } from './components';
import GlobalStyle from './globalStyle';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Registration } from './components/registration/Registration';
import './App.css';


export const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <div className='wrapper'>
        <Switch>
          <Route path='/registration' component={Registration} />
          <Route path='/' component={FinancialStatus} />
        </Switch>
      </div>
    </BrowserRouter>
  )
    ;
};