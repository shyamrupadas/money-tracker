import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountType, FinancialStatusType } from '../types/types';
import { createAccount, deleteCard, getAccounts, updateCard } from '../api/api';

const initialState: FinancialStatusType = {
  cards: [],
  sum: 0,
  pending: false,
  error: null
};

export const fetchAccounts = createAsyncThunk(
  'account/fetchAccounts',
  async (_, { rejectWithValue }) => {
    try {
      return await getAccounts();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const changeCardSum = createAsyncThunk(
  'account/changeCardSum',
  async ({ card, sum }: { card: AccountType, sum: number }, { rejectWithValue }) => {
    try {
      return await updateCard({...card, sum: sum});
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const removeCard = createAsyncThunk(
  'account/removeCard',
  async (id: string, { rejectWithValue }) => {
    try {
      return await deleteCard(id);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const makeAccount = createAsyncThunk(
  'account/makeAccount',
  async (card: Object , { rejectWithValue }) => {
    try {
      return await createAccount({ ...card });
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<AccountType>) => {
      state.cards[state.cards.findIndex(item => item._id === action.payload._id)] = action.payload;
    },
    setCardSum: (state, action: PayloadAction<{ card: AccountType, sum: number }>) => {
      state.cards[state.cards.findIndex(item => item._id === action.payload.card._id)].sum = action.payload.sum;
    },
    setSum: (state, action: PayloadAction<number>) => {
      state.sum = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAccounts.pending, (state) => {
      state.pending = true;
      state.error = null;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards = action.payload;
    });
    builder.addCase(fetchAccounts.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(changeCardSum.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards[state.cards.findIndex(item => item._id === action.payload._id)] = action.payload;
    });
    builder.addCase(changeCardSum.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(removeCard.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards = state.cards.filter((item: AccountType) => item._id !== action.payload._id);
    });
    builder.addCase(removeCard.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(makeAccount.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards = [...state.cards, action.payload ];
    });
    builder.addCase(makeAccount.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });

  }
});

export const { setCardSum, setSum } = accountSlice.actions;
export default accountSlice.reducer;
