import React from 'react'
import { useState } from 'react'
import AlignTwoObject from '@/components/common/AlignTwoObject/AlignTwoObject'
import { Button } from '@/components/ui-library/Button/Button'
import { useCounter } from '@/store/pages/home/Parent/context'
import { useTimer, useTimerDisabled } from '@/store/pages/home/state'
import TimerString from '../../../app/TimerString/TimerString'
import Child from './Child/Child'
import ChildMemo from './ChildMemo/ChildMemo'
import Styles from './Parent.module.scss'
const ParentComponent = () => {
  console.log('親コンポーネント')
  const state = useCounter()
  const [timerDisable, setTimerDisable] = useTimerDisabled()
  const [time, setTime] = useTimer()
  const [stateA, setStateA] = useState(0)
  const [stateB, setStateB] = useState(0)

  const clickTimer = async () => {
    setTimerDisable()
    setTime('initialize')
  }

  const onClickA = () => {
    setStateA((state) => state + 1)
  }

  const onClickB = () => {
    setStateB((state) => state + 1)
  }

  return (
    <>
      <div className={Styles['body']}>
        <div className={Styles['title']}>親コンポーネント</div>
        <AlignTwoObject
          leftEle={<>useContextが押された回数</>}
          rightEle={<> {state}回</>}
          alignedPosition='center'
        />
        <AlignTwoObject
          leftEle={<Button onClick={clickTimer}>タイマー</Button>}
          rightEle={
            <div style={{ display: 'flex' }}>
              {timerDisable ? 0 : <TimerString time={time} intervalMethod={setTime} />}秒
            </div>
          }
        />
        <AlignTwoObject
          leftEle={<Button onClick={onClickA}>ボタンA</Button>}
          rightEle={<Button onClick={onClickB}>ボタンB</Button>}
        ></AlignTwoObject>
        <AlignTwoObject
          leftEle={<Child name='子コンポーネントA' state={stateA} />}
          rightEle={<ChildMemo name='子コンポーネントB' state={stateB} />}
        />
      </div>
    </>
  )
}

export default ParentComponent
