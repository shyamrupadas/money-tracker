import React, { useState } from 'react';
import { CardType } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { setCardSum } from '../../store/financialStatusSlice';


type CardProps = {
  card: CardType
  index: number
};

export const Card: React.FC<CardProps> = ({ card, index }) => {

  const dispatch = useAppDispatch();

  const onInput = (value: string) => {
    dispatch({type: setCardSum, payload: {id: index, sum: +value}});
    setEditMode(false);
  };

  const [editMode, setEditMode] = useState(false);

  return <>
    {!editMode &&
    <tr>
      <td>{card.name}</td>
      <td
        onDoubleClick={() => setEditMode(true)}
      >{card.sum}</td>
      <td>{card.actualDate}</td>
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
    </tr>
    }
  </>
};