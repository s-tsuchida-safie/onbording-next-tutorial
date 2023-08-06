import React from 'react'

import ParentComponent from '@/components/page/home/Parent/Parent'
import { CounterContextProvider } from '@/store/pages/home/Parent/context'
import Styles from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <CounterContextProvider>
      <div className={Styles['Annotation']}>
        ※子コンポーネントはレンダリングされるたびにコンソール出力
      </div>
      <div className={Styles['Parent']}>
        <ParentComponent />
      </div>
    </CounterContextProvider>
  )
}

export default Home
