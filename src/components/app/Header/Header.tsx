import Styles from './Header.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux-slice/store'

const Header = () => {
  const counter = useSelector((s: RootState) => s.counter)
  return (
    <div className={Styles['app-header']}>
      <span style={{ fontWeight: 'bold' }}>Redux</span>が押された回数:{' '}
      <span style={{ fontWeight: 'bold' }}>{counter}回</span>
    </div>
  )
}

export default Header
