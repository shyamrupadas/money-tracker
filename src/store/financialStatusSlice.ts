import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FinancialStatusType } from '../types/types';
import { getCards } from '../api/api';

const initialState: FinancialStatusType = {
  cards: [],
  sum: 0,
  pending: false,
  error: null
};

export const fetchCards = createAsyncThunk(
  'financialStatus/fetchCards',
  async (_, { rejectWithValue }) => {
    try {
      return await getCards();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {
    setCardSum: (state, action: PayloadAction<{ id: number, sum: number }>) => {
      state.cards[state.cards.findIndex(item => item.id === action.payload.id)].sum = action.payload.sum;
    },
    setSum: (state, action: PayloadAction<number>) => {
      state.sum = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards = action.payload;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
  }
});

export const { setCardSum, setSum } = financialStatusSlice.actions;
export default financialStatusSlice.reducer;
