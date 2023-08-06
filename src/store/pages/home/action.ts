import { HomePageState } from './state'

export const countUp = (state: HomePageState) => {
  const newState = Object.assign({}, state)
  newState.count = newState.count + 1
  return newState
}
