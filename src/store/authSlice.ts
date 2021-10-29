import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../api/api';
import { authSliceType } from '../types/types';

const initialState: authSliceType = {
  pending: false,
  error: '',
  isAuth: false,
  currentUser: {
    userName: '',
    id: ''
  },
  jwt: ''
};

export const registrationUser = createAsyncThunk(
  'auth/registrationUser',
  async ({ login, password }: { login: string, password: string }, { rejectWithValue }) => {
    try {
      return await auth.registration(login, password);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ login, password }: { login: string, password: string }, { rejectWithValue }) => {
    try {
      return await auth.login(login, password);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const authUser = createAsyncThunk(
  'auth/auth',
  async (_, { rejectWithValue }) => {
    try {
      return await auth.auth();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.currentUser.userName = '';
      state.currentUser.id = '';
      state.isAuth = false;
    }
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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.currentUser = action.payload.user;
      state.isAuth = true;
      // @ts-ignore
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.currentUser = action.payload.user;
      state.isAuth = true;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.pending = false;
      // @ts-ignore
      state.error = action.payload;
      localStorage.removeItem('token');
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
