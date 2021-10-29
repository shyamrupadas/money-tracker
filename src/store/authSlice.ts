import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registration} from '../api/api';
import { authSliceType } from '../types/types';

const initialState: authSliceType = {
  pending: false,
  error: '',
  isAuth: false,
  jwt: ''
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async ({login, password}: {login: string, password: string}, { rejectWithValue }) => {
    try {
      return await registration(login, password);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      alert(action.payload)
    });
    builder.addCase(registrationUser.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
  }
});

// export const { setCardSum, setSum } = financialStatusSlice.actions;
export default authSlice.reducer;
