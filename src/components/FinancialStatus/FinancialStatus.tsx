import { Card } from './Card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useEffect } from 'react';
import { fetchCards, financialStatusSlice } from '../../store/financialStatusSlice';

export const FinancialStatus: React.FC = () => {

  const { cards, sum, pending, error } = useAppSelector(state => state.financialStatusSlice);
  const dispatch = useAppDispatch();
  const { setSum } = financialStatusSlice.actions;

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSum(cards.reduce((sum, current) => sum + current.sum, 0)));
  }, [cards, dispatch, setSum]);

  if (error) return <h2>{error}</h2>
  if (pending) return <h2>Загрузка...</h2>

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
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {
            cards.map((card) => <Card key={card._id} card={card} />)
          }
          </tbody>
          <tfoot>
          <tr>
            <td>Итого</td>
            <td>{sum}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          </tfoot>
        </table>
        <button>Добавить карту</button>
        <p style={{ marginTop: '20px' }}>Двойной клик по сумме для изменения</p>
      </article>
    </>
  );
};