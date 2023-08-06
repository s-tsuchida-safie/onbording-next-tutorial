import { Provider } from 'react-redux'

import { AppProps } from 'next/app'
import Head from 'next/head'

// Component
import AppInitializer from '@/components/app/AppInitializer'

// Redux
import { store } from '@/redux-slice/store'

// Css
import './_app.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <AppInitializer>
          <Head>
            <title>React基礎の練習アプリ</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
          </Head>
          <Component {...pageProps} />
        </AppInitializer>
      </Provider>
    </>
  )
}

export default App
