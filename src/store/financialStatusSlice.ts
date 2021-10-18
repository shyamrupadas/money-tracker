import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinancialStatusType } from '../types/types';

const initialState: FinancialStatusType = {
  cards: [
    {
      id: 1,
      name: 'Сбербанк',
      sum: 0,
      actualDate: 1234567
    },
    {
      id: 2,
      name: 'Хоум-Кредит',
      sum: 0,
      actualDate: 1234567
    },
    {
      id: 3,
      name: 'Тиньков',
      sum: 0,
      actualDate: 1234567
    },
  ],
  sum: 0
};

export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {
    setCardSum: (state, action: PayloadAction<{id: number, sum: number}>) => {
      state.cards[state.cards.findIndex(item => item.id === action.payload.id)].sum = action.payload.sum;
    },
    setSum: (state, action: PayloadAction<number>) => {
      state.sum = action.payload;
    }
  }
});

export const { setCardSum, setSum } = financialStatusSlice.actions;
export default financialStatusSlice.reducer;
