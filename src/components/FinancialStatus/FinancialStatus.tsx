import React, { useCallback, useEffect, useState } from 'react';
import { Card } from './Card';

export type CardsType = {
  id: number
  name: string
  sum: number
  actualDate: number
};

export const FinancialStatus: React.FC = () => {

  const countSum = (arr: Array<CardsType>) => {
    let res = 0;
    arr.forEach(el => {
      res += el.sum;
    })
    return res;
  };

  const [cards, setCards] = useState<Array<CardsType>>([
    {
      id: 1,
      name: 'Сбербанк',
      sum: 50000,
      actualDate: 12021987
    },
    {
      id: 2,
      name: 'Тиньков',
      sum: 41000,
      actualDate: 13022984
    },
  ]);
  const [sum, setSum] = useState(countSum(cards));

  useEffect(() => {
    setSum(countSum(cards));
  }, [cards])

  const changeSum = useCallback((id: number, sum: string) => {
    setCards(
      cards.map((el: CardsType) =>
        el.id === id
          ? { ...el, sum: +sum } : el
      )
    );
  }, [cards]);

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
            cards.map(card => <Card key={card.id} card={card} changeSum={changeSum} />)
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