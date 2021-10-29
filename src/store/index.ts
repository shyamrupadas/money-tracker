import { combineReducers, configureStore } from '@reduxjs/toolkit';
import financialStatusSlice from './financialStatusSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  financialStatusSlice: financialStatusSlice,
  authSlice: authSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch