import { useEffect } from 'react'

type TimerStringProps = {
  time: number
  intervalMethod: React.Dispatch<string>
}
const TimerString = ({ time, intervalMethod }: TimerStringProps) => {
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      intervalMethod('count')
    }, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])
  return <>{time}</>
}

export default TimerString
