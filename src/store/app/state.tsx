import { ReactNode } from 'react'

export type AppState = {
  count: number
  headerText: ReactNode
}

export const getInitialAppState = (): AppState => {
  return {
    count: 0,
    headerText: <></>,
  }
}
