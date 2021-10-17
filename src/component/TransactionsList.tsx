import React from 'react';
import Transaction, { TransactionsListType } from './Transaction';

const TransactionsList: React.FC<TransactionsListType> = ({ transactions }) => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Дата
          </th>
          <th>
            Тип
          </th>
          <th>
            Название
          </th>
          <th>
            Сумма
          </th>
          <th>
            Дебет
          </th>
          <th>
            Кредит
          </th>
          <th>
            Комментарий
          </th>
        </tr>
        </thead>
        <tbody>
        {transactions.map((t) => <Transaction
          key={t.id}
          transaction={t}
          comment={t.comment}
          credit={t.credit}
          date={t.date}
          debit={t.debit}
          id={t.id}
          sum={t.sum}
          title={t.title}
          type={t.type}/>
        )}

        </tbody>
      </table>
    </div>
  );
};

export default TransactionsList;