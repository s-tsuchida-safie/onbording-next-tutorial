import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomePageState, getInitialHomePageState } from '@/store/pages/home/state'

const initialState: HomePageState = getInitialHomePageState()

export const homePageSlice = createSlice({
  name: 'HomePage',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<HomePageState>) => {
      for (const key in state) {
        if (key in action.payload) {
          console.log(action.payload)
          // @ts-expect-error 【TODO】型エラー修正する
          state[key] = action.payload[key]
        }
      }
    },
  },
})

export const { updateState } = homePageSlice.actions

export default homePageSlice.reducer
