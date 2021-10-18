import { CardsType } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';


const initialState: CardsType[] = [
  {
    id: 0,
    name: '',
    sum: 0,
    actualDate: 0
  }
];

export const financialStatusSlice = createSlice({
  name: 'financialStatus',
  initialState,
  reducers: {

  }
});

export default financialStatusSlice.reducer;
