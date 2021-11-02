import { combineReducers, configureStore } from '@reduxjs/toolkit';
import accountSlice from './accountSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  accountSlice: accountSlice,
  authSlice: authSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch