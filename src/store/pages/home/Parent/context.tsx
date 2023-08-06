import { createContext, ReactNode, useContext, useState } from 'react'

export const CouterContext = createContext<number>(0)

export const CounterDispatchContext = createContext(
  {} as React.Dispatch<React.SetStateAction<number>>,
)

export const CounterContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(0)
  return (
    <CounterDispatchContext.Provider value={setState}>
      <CouterContext.Provider value={state}>{children}</CouterContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useCounter = () => useContext(CouterContext)
export const useCouterDispatch = () => useContext(CounterDispatchContext)
