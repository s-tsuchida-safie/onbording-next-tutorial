import { AppState } from './state'

export const selectCountState = (state: AppState) => {
  return state.count
}

export const selectHeaderText = (state: AppState) => {
  return state.headerText
}
