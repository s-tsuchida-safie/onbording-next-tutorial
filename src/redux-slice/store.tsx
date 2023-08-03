import { configureStore } from '@reduxjs/toolkit'
import appStateSlice from './appState/slice'

export const store =  configureStore({
  reducer: {
    counter: appStateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch