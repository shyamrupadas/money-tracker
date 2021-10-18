import { Card } from './Card';
import { useAppSelector } from '../../hooks/hooks';
import React from 'react';

export const FinancialStatus: React.FC = () => {

  const { cards, sum } = useAppSelector(state => state.financialStatusSlice);

  return (
    <>
      <header>
        <h1>
          Состояние финансов
        </h1>
      </header>
      <article>
        <table>
          <caption>Средства на руках</caption>
          <thead>
          <tr>
            <th>Карты</th>
            <th>Сумма</th>
            <th>Актуальность</th>
          </tr>
          </thead>
          <tbody>
          {
            cards.map((card, index) => <Card key={card.id} card={card} index={index}/>)
          }
          </tbody>
          <tfoot>
          <tr>
            <td>Итого</td>
            <td>{sum}</td>
            <td>-</td>
          </tr>
          </tfoot>
        </table>
      </article>
    </>
  );
};