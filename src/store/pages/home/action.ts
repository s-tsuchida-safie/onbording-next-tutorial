import { HomePageState } from './state'

export const countUp = (state: HomePageState) => {
  const newState = Object.assign({}, state)
  console.log('new', newState)
  newState.count = newState.count + 1
  return newState
}
