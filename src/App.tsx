import React from 'react';
import { FinancialStatus } from './components';
import GlobalStyle from './globalStyle';
import { Navbar } from './components/navbar/Navbar';

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FinancialStatus />
    </>
  );
};