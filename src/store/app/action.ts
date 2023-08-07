import { ReactNode } from 'react'
import { AppState } from './state'

export const countUpAction = (state: AppState, payload: number): AppState => {
  const newState = Object.assign({}, state)
  newState.count = newState.count + payload
  return newState
}

export const updateText = (state: AppState, payload: ReactNode): AppState => {
  const newState = Object.assign({}, state)
  newState.headerText = payload
  return newState
}
