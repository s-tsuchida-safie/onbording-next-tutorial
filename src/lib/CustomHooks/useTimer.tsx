import { useEffect, useReducer } from 'react'

const useTimer = () => {
  const [timer, setTimer] = useReducer((prev: number, action: string) => {
    switch (action) {
      case 'initialize':
        return 0
      case 'count':
        return prev + 1
      default:
        return -1
    }
  }, 0)
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimer('count')
    }, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])
  return { timer, setTimer }
}

export default useTimer
