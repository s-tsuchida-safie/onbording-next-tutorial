import { useSelector } from 'react-redux'
import { RootState } from '@/redux-slice/store'
import { updateText } from '@/store/app/action'
import { selectCountState, selectHeaderText } from '@/store/app/selector'
import Styles from './Header.module.scss'

const Header = () => {
  const appState = useSelector((s: RootState) => s.app)
  const count = selectCountState(appState)
  const newAppState = updateText(
    appState,
    <>
      <span style={{ fontWeight: 'bold' }}>Redux</span>が押された回数:{' '}
      <span style={{ fontWeight: 'bold' }}>{count}回</span>
    </>,
  )
  const headerText = selectHeaderText(newAppState)
  return <div className={Styles['app-header']}>{headerText}</div>
}

export default Header
