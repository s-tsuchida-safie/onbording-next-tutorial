import { countUp } from '@/redux-slice/appState/slice'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'

type AppInitializerProps = { children: ReactNode }

const AppInitializer = ({ children }: AppInitializerProps) => {
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      const initalState = 3;
      dispatch(countUp(initalState));
    })()
  }, [dispatch])
  return <>{children}</>
}

export default AppInitializer;