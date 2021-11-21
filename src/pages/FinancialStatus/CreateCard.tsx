import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { makeCard } from '../../store/accountSlice';
import { Button, TextField } from '@mui/material';

type CreateCardType = {
  showModal: Dispatch<SetStateAction<boolean>>
};

export const CreateCard: React.FC<CreateCardType> = ({ showModal }) => {
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
    <form onSubmit={handleSubmit}>
      <TextField
        type={'outlined'}
        autoFocus={true}
        size={'small'}
        name='cardName'
        id='cardName'
        placeholder='Название'
      />
      <TextField
        sx={{ width: '130px', ml: '10px' }}
        type={'outlined'}
        size={'small'}
        name='cardSum'
        id='cardSum'
        placeholder='Сумма'
      />
      <Button
        type='submit'
        variant='outlined'
        sx={{ ml: '10px' }}
      >
        Добавить
      </Button>
      <Button
        type='button'
        variant='outlined'
        color={'error'}
        sx={{ ml: '10px' }}
        onClick={() => showModal(false)}
      >
        X
      </Button>
    </form>
  )
};