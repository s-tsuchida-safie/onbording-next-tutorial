import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import AlignTwoObject from '@/components/common/AlignTwoObject/AlignTwoObject'
import { Button } from '@/components/ui-library/Button/Button'
import { updateState } from '@/redux-slice/pages/home/slice'
import { RootState } from '@/redux-slice/store'
import { countUp } from '@/store/pages/home/action'
import { useCouterDispatch } from '@/store/pages/home/Parent/context'
import Styles from './ChildMemo.module.scss'

type ChildComponentProps = {
  name: string
  state: number
}

// eslint-disable-next-line react/display-name
const ChildMemo = memo(({ name, state }: ChildComponentProps) => {
  console.log(name)
  const setState = useCouterDispatch()
  const dispatch = useDispatch()
  const countState = useSelector((state: RootState) => state.homePage)

  const reduxClickHandler = () => {
    dispatch(updateState(countUp(countState)))
  }
  const useContextClickHandler = () => {
    setState((prev) => prev + 1)
  }
  return (
    <div className={clsx(Styles['body'], Styles['light-green'])}>
      <div className={Styles['title']}>{name + '(Memo化)'}</div>
      <div className={Styles['button-assign']}>
        <Button onClick={reduxClickHandler}>Redux</Button>
      </div>
      <div className={Styles['button-assign']}>
        <Button onClick={useContextClickHandler}>useContext</Button>
      </div>
      <AlignTwoObject
        leftEle={<>ボタンBが押された数</>}
        rightEle={<>{state}回</>}
        fontSize='12px'
        marginTop='0px'
      />
    </div>
  )
})

export default ChildMemo
