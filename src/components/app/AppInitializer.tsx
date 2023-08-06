import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { countUp } from '@/redux-slice/appState/counter'

type AppInitializerProps = { children: ReactNode }

const AppInitializer = ({ children }: AppInitializerProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const initalState = 0
      dispatch(countUp(initalState))
    })()
  }, [dispatch])
  return <>{children}</>
}

export default AppInitializer
