import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/redux-slice/store'
import AppInitializer from '@/components/app/AppInitializer'
import Home from '@/components/page/Home/Home'


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  
  useEffect(() => {
    router.push('home')
  }, [router])
  return (
    <>
      <Provider store={store}>
      <AppInitializer>
          <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
          </Head>
          <Component {...pageProps} />
        </AppInitializer>
      </Provider>
    </>
  )
}

export default App
