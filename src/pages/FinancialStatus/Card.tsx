import React, { useState } from 'react';
import { CardType } from '../../types/types';
import { useAppDispatch } from '../../hooks/hooks';
import { changeCardSum, removeCard } from '../../store/accountSlice';
import TableRow from '@mui/material/TableRow';
import { IconButton, TableCell, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type CardProps = {
  card: CardType
};

export const Card: React.FC<CardProps> = ({ card }) => {
  const [viewMode, setViewMode] = useState<'normal' | 'hover' | 'edit'>('normal');
  const [inputSum, setInputSum] = useState(card.sum.toString());
  const dispatch = useAppDispatch();

  const onInput = (value: string) => {
    setViewMode('normal');
    dispatch(changeCardSum({ card: card, sum: +value }));

  };

  const onButton = () => {
    if (window.confirm('вы уверены?')) {
      dispatch(removeCard(card._id));
    }
  };


  return <>
    {viewMode === 'normal' &&
    <TableRow
      hover
      onMouseOver={() => setViewMode('hover')}
      onMouseOut={() => setViewMode('normal')}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {card.name}
      </TableCell>
      <TableCell align="right">{card.sum}</TableCell>
      <TableCell align="right">{card.actualDate.slice(0, 10)}</TableCell>
      <TableCell align="right">-</TableCell>
      <TableCell align="right">-</TableCell>
    </TableRow>
    }

    {viewMode === 'edit' &&
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {card.name}
      </TableCell>
      <TableCell align="right">
        <TextField
          value={inputSum}
          onChange={e => setInputSum(e.target.value)}
          type={'outlined'}
          autoFocus={true}
          size={'small'}

          onBlur={() => onInput(inputSum)}
        >
        </TextField>
      </TableCell>
      <TableCell align="right">{card.actualDate.slice(0, 10)}</TableCell>
      <TableCell align="right">-</TableCell>
      <TableCell align="right">-</TableCell>
    </TableRow>
    }

    {viewMode === 'hover' &&
    <TableRow
      hover
      onMouseOver={() => setViewMode('hover')}
      onMouseOut={() => setViewMode('normal')}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {card.name}
      </TableCell>
      <TableCell
        onDoubleClick={() => setViewMode('edit')}
        sx={{ cursor: 'pointer'}}
        align="right"
      >
        {card.sum}
      </TableCell>
      <TableCell align="right">{card.actualDate.slice(0, 10)}</TableCell>
      <TableCell align="right">
        -
      </TableCell>
      <TableCell align="right">
        <IconButton
          size={'small'}
          color="inherit"
          onClick={() => setViewMode('edit')}
        >
          <EditIcon />
        </IconButton>
      </TableCell>
    </TableRow>
    }
  </>
};