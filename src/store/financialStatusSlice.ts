import { createSlice } from '@reduxjs/toolkit';
import { FinancialStatusType } from '../types/types';


const initialState: FinancialStatusType = {
  cards: [
    {
      id: 1,
      name: 'Сбербанк',
      sum: 20000,
      actualDate: 1234567
    },
    {
      id: 2,
      name: 'Хоум-Кредит',
      sum: 15000,
      actualDate: 1234567
    },
    {
      id: 3,
      name: 'Тиньков',
      sum: 7200,
      actualDate: 1234567
    },
  ],
  sum: 0
};

export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {
    setSum: (state, action) => {
      state.cards[action.payload.id].sum = action.payload.sum
    }
  }
});

export const { setSum } = financialStatusSlice.actions;
export default financialStatusSlice.reducer;
