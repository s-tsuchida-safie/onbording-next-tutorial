import { useSelector } from 'react-redux'
import { RootState } from '@/redux-slice/store'
import Styles from './Header.module.scss'

const Header = () => {
  const counterNum = useSelector((s: RootState) => s.counter)
  return (
    <div className={Styles['app-header']}>
      <span style={{ fontWeight: 'bold' }}>Redux</span>が押された回数:{' '}
      <span style={{ fontWeight: 'bold' }}>{counterNum}回</span>
    </div>
  )
}

export default Header
