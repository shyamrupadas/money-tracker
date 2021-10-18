import { combineReducers, configureStore } from '@reduxjs/toolkit';
import financialStatusSlice from './financialStatusSlice';

const rootReducer = combineReducers({
  financialStatusSlice: financialStatusSlice
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch