import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { auth } from '../shared/api/api';
import { authSliceType } from '../shared/types/types';

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
  async ({ user, password }: { user: string, password: string }, { rejectWithValue }) => {
    try {
      return await auth.registration(user, password);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ user, password }: { user: string, password: string }, { rejectWithValue }) => {
    try {
      return await auth.login(user, password!);
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (_, { rejectWithValue }) => {
    try {
      return await auth.auth();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);


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
      alert(action.payload.message)
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
    builder.addCase(authUser.rejected, (state) => {
      state.pending = false;
      // @ts-ignore
      localStorage.removeItem('token');
    });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
