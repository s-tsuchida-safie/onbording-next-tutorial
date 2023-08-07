import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import AlignTwoObject from '@/components/common/AlignTwoObject/AlignTwoObject'
import { Button } from '@/components/ui-library/Button/Button'
import { countUp } from '@/redux-slice/app/slice'
import { useCouterDispatch } from '@/store/pages/home/Parent/context'
import Styles from './Child.module.scss'

type ChildComponentProps = {
  name: string
  state: number
}

const Child = ({ name, state }: ChildComponentProps) => {
  console.log(name)
  const setState = useCouterDispatch()
  const dispatch = useDispatch()

  const reduxClickHandler = () => {
    dispatch(countUp(1))
  }
  const useContextClickHandler = () => {
    setState((prev) => prev + 1)
  }
  return (
    <div className={clsx(Styles['body'], Styles['pink'])}>
      <div className={Styles['title']}>{name}</div>
      <div className={Styles['button-assign']}>
        <Button onClick={reduxClickHandler}>Redux</Button>
      </div>
      <div className={Styles['button-assign']}>
        <Button onClick={useContextClickHandler}>useContext</Button>
      </div>
      <AlignTwoObject
        leftEle={<>ボタンAが押された数</>}
        rightEle={<>{state}回</>}
        fontSize='12px'
        marginTop='0px'
      />
    </div>
  )
}

export default Child
