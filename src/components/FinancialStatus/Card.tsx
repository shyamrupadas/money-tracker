import React, { useState } from 'react';
import { CardsType } from './FinancialStatus';

type CardType = {
  card: CardsType
  changeSum: (id: number, value: string) => void
};


export const Card: React.FC<CardType> = ({ card, changeSum }) => {

  const onInput = (value: string) => {
    changeSum(card.id, value);
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