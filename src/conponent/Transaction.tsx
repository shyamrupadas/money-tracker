import React from 'react';

export type TransactionType = {
    id: number
    date: string
    type: string
    title: string
    sum: number
    debit: string
    credit: string
    comment: string
};

type TransactionObjectType = {
  transaction: TransactionType
};


export type TransactionsListType = {
  transactions: Array<TransactionType>
};

const Transaction: React.FC<TransactionType & TransactionObjectType> = ({
                                                  id,
                                                  date,
                                                  type,
                                                  title,
                                                  sum,
                                                  debit,
                                                  credit,
                                                  comment
}) => {
  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
        {date}
      </td>
      <td>
        {type}
      </td>
      <td>
        {title}
      </td>
      <td>
        {sum}
      </td>
      <td>
        {debit}
      </td>
      <td>
        {credit}
      </td>
      <td>
        {comment}
      </td>
    </tr>
  );
};

export default Transaction;