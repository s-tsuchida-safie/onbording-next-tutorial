import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { countUpAction } from '@/store/app/action'
import { AppState, getInitialAppState } from '@/store/app/state'

const initialState: AppState = getInitialAppState()

export const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    countUp: (state: AppState, action: PayloadAction<number>) => {
      const newState = countUpAction(state, action.payload)
      return newState
    },
    updateState: (state, action: PayloadAction<AppState>) => {
      for (const key in state) {
        if (key in action.payload) {
          // @ts-expect-error 【TODO】型エラー修正する
          state[key] = action.payload[key]
        }
      }
    },
  },
})

export const { countUp, updateState } = AppSlice.actions

export default AppSlice.reducer
