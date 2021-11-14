import { Card } from './Card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useEffect, useState } from 'react';
import { fetchAccounts, accountSlice } from '../../store/accountSlice';
import { CreateCard } from './CreateCard';
import s from './FinancialStatus.module.css';

export const FinancialStatus: React.FC = () => {

  const { cards, sum, pending, error } = useAppSelector(state => state.accountSlice);
  const dispatch = useAppDispatch();
  const { setSum } = accountSlice.actions;

  const [showCreateCard, setShowCreateCard] = useState(false);

    useEffect(() => {
      dispatch(fetchAccounts());
    }, [dispatch]);

  useEffect(() => {
    dispatch(setSum(cards.reduce((sum, current) => sum + current.sum, 0)));
  }, [cards, dispatch, setSum]);

  if (error) return <h2>{error}</h2>
  if (pending) return <h2>Загрузка...</h2>

  return (
    <main className={s.wrapper}>
      <div className={s.container}>
        <header>
          <h1>
            Состояние финансов
          </h1>
        </header>
        <article>
          <table>
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
          <button onClick={() => setShowCreateCard(true)}>Добавить карту</button>
          {showCreateCard && <CreateCard showModal={setShowCreateCard} />}
          <p style={{ marginTop: '20px' }}>Двойной клик по сумме для изменения</p>
        </article>
      </div>
    </main>
  );
};