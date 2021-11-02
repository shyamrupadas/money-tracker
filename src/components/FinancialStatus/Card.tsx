import React, { useState } from 'react';
import { CardType } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { changeCardSum, removeCard } from '../../store/accountSlice';

type CardProps = {
  card: CardType
};

export const Card: React.FC<CardProps> = ({ card }) => {

  const dispatch = useAppDispatch();

  const onInput = (value: string) => {
    dispatch(changeCardSum({ card: card, sum: +value }));
    setEditMode(false);
  };

  const onButton = () => {
    if (window.confirm('вы уверены?')) {
      dispatch(removeCard(card._id));
    }
  };

  const [editMode, setEditMode] = useState(false);

  return <>
    {!editMode &&
    <tr>
      <td>{card.name}</td>
      <td
        onDoubleClick={() => setEditMode(true)}
        style={{ cursor: 'pointer' }}
      >{card.sum}</td>
      <td>{card.actualDate}</td>
      <td>
        <button onClick={onButton} style={{ width: '20px', cursor: 'pointer' }}
        >x
        </button>
      </td>
    </tr>
    }
    {editMode &&
    <tr>
      <td>{card.name}</td>
      <td>
        <input
          autoFocus
          onBlur={(e) => onInput(e.target.value)}
        />
      </td>
      <td>{card.actualDate}</td>
      <td>&nbsp;</td>
    </tr>
    }
  </>
};