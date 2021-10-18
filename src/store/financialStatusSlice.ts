import { createSlice } from '@reduxjs/toolkit';
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

// export const changeSum = createAsyncThunk(
//   'financialStatus/changeSum',
//   async ({id, sum}: any) => {
//     dispatch({ type: 'setSum', payload: { id: id, sum: sum } })
//
//   }
// );

export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {
    setCardSum: (state, action) => {
      //todo Сделать с методом find
      state.cards[action.payload.id].sum = action.payload.sum
    },
    setSum: (state, action) => {
      state.sum = action.payload;
    }
  }
});

export const { setCardSum, setSum } = financialStatusSlice.actions;
export default financialStatusSlice.reducer;
