import { useEffect, useReducer, useState } from 'react'

const useTimer = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
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
    let intervalId: number
    if (isTimerRunning) {
      intervalId = window.setInterval(() => {
        setTimer('count')
      }, 1000)
    }
    return () => {
      window.clearInterval(intervalId)
    }
  }, [isTimerRunning])
  return { timer, setTimer, isTimerRunning, setIsTimerRunning }
}

export default useTimer
