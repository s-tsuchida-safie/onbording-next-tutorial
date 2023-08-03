import React from 'react'
import { useDispatch } from 'react-redux'
import { countUp } from '@/redux-slice/appState/slice'
import { Button } from '@/components/ui-library/Button/Button'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(countUp(1))
  }
  return (
    <>
      <Button onClick={clickHandler}>ボタンA</Button>
    </>
  )
}

export default Home
