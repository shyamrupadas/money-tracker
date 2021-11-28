import { Account } from './Account';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import React, { useEffect, useState } from 'react';
import { accountSlice, fetchAccounts } from '../../store/accountSlice';
import { CreateAccount } from './CreateAccount';
import { Button, Container, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Footer } from '../../features/Footer';

export const AccountsPage: React.FC = () => {

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
    <Container
      sx={{
        ml: 'auto',
        mr: 'auto',
        maxWidth: '600px'
      }}
    >
      <Typography
        variant='h4'
        mt={'10px'}
        mb={'20px'}
      >
        Счета
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          ml: 'auto',
          mr: 'auto',
          mb: '20px'
        }}
      >
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow hover>
              <TableCell>Счета</TableCell>
              <TableCell align="right">Сумма</TableCell>
              <TableCell align="right">Актуальность</TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(card => <Account key={card._id} card={card} />
            )}
          </TableBody>
          <TableHead>
            <TableRow hover>
              <TableCell>Итого</TableCell>
              <TableCell align="right">{sum}</TableCell>
              <TableCell align="right"> </TableCell>
              <TableCell align="right"> </TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {showCreateCard && <CreateAccount showModal={setShowCreateCard} />}
      {!showCreateCard &&
      <Button

        variant="outlined"
        onClick={() => setShowCreateCard(true)}
      >
        Добавить счет
      </Button>
      }
      <Footer text='*Двойной клик по сумме для изменения'/>
    </Container>
  );
};