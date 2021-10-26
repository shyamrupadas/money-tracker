import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { makeCard } from '../../store/financialStatusSlice';

type CreateCardType = {
  showModal: Dispatch<SetStateAction<boolean>>
};

export const CreateCard: React.FC<CreateCardType> = ({showModal}) => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    const card = {
      name: e.target.elements.cardName.value,
      sum: +e.target.elements.cardSum.value,
    }
    e.preventDefault();
    dispatch(makeCard(card));
    showModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='cardName' id='cardName' placeholder='Название карты' />
        <input type='text' name='cardSum' id='cardSum' placeholder='Сумма'/>
        <button>Добавить</button>
        <button type='button' onClick={() => showModal(false)}>Отмена</button>
      </form>

    </>
  )
};