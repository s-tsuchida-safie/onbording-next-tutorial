import { useReducer } from 'react'

export const useTimer = () =>
  useReducer((prev: number, action: string) => {
    switch (action) {
      case 'initialize':
        return 0
      case 'count':
        return prev + 1
      default:
        return -1
    }
  }, 0)

export const useTimerDisabled = () => useReducer((prev) => !prev, true)
