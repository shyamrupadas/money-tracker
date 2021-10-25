import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType, FinancialStatusType } from '../types/types';
import { createCard, deleteCard, getCards, updateCard } from '../api/api';

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

export const changeCardSum = createAsyncThunk(
  'financialStatus/changeCardSum',
  async ({ card, sum }: { card: CardType, sum: number }, { rejectWithValue }) => {
    try {
      return await updateCard({...card, sum: sum});
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const removeCard = createAsyncThunk(
  'financialStatus/removeCard',
  async (id: string, { rejectWithValue }) => {
    try {
      return await deleteCard(id);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const makeCard = createAsyncThunk(
  'financialStatus/makeCard',
  async (card: Object , { rejectWithValue }) => {
    try {
      return await createCard({ ...card, actualDate: Date.now() });
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);


export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<CardType>) => {
      state.cards[state.cards.findIndex(item => item._id === action.payload._id)] = action.payload;
    },
    setCardSum: (state, action: PayloadAction<{ card: CardType, sum: number }>) => {
      state.cards[state.cards.findIndex(item => item._id === action.payload.card._id)].sum = action.payload.sum;
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
      state.cards = state.cards.filter((item: CardType) => item._id !== action.payload._id);
    });
    builder.addCase(removeCard.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(makeCard.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.cards = [...state.cards, action.payload ];
    });
    builder.addCase(makeCard.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });

  }
});

export const { setCardSum, setSum } = financialStatusSlice.actions;
export default financialStatusSlice.reducer;
