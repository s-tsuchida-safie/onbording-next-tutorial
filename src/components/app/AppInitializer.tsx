import { ReactNode } from 'react'

type AppInitializerProps = { children: ReactNode }

const AppInitializer = ({ children }: AppInitializerProps) => {
  return <>{children}</>
}

export default AppInitializer
