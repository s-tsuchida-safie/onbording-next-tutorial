//React
import { ReactNode } from 'react'

import Header from '../app/Header'

import styles from './DefaultLayout.module.scss'
import { Provider } from 'react-redux'
import { store } from '@/redux-slice/store'

type DefaultLayoutProps = { children: ReactNode }

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Provider store={store}>
      <div className={styles['app-default-layout']}>
        <Header />
        <div className={styles['app-main']}>
          <div className={styles['app-content']}>{children}</div>
        </div>
      </div>
      </Provider>
    </>
  )
}

export default DefaultLayout;