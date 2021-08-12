import React, { useState } from 'react';
import './App.css';
import TransactionsList from './conponent/TransactionsList';

function App() {

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2021-08-12',
      type: 'Еда вне дома',
      title: 'Мороженка',
      sum: 550,
      debit: 'Прибыль',
      credit: 'Карта',
      comment: 'Какой-то комментарий'
    },
    {
      id: 2,
      date: '2021-08-12',
      type: 'Еда вне дома',
      title: 'Мороженка',
      sum: 550,
      debit: 'Прибыль',
      credit: 'Карта',
      comment: 'Какой-то комментарий'
    },
    {
      id: 3,
      date: '2021-08-12',
      type: 'Еда вне дома',
      title: 'Мороженка',
      sum: 550,
      debit: 'Прибыль',
      credit: 'Карта',
      comment: 'Какой-то комментарий'
    }
  ]);


  return (
    <div className='App'>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default App;
