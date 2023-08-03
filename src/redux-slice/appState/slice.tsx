import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    countUp(state, action: PayloadAction<number>) {
      return state + action.payload
    },
  },
})

export const { countUp } = counter.actions;

export default counter.reducer;