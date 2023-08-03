import Styles from './Header.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux-slice/store'

const Header = () => {
  const appState = useSelector((s: RootState) => s.counter)
  return <div className={Styles['app-header']}>Reduxが押された回数: {appState.toString()}回</div>
}

export default Header
