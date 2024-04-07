import '../styles/globals.css'

import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { TaskProvider } from '../context/TaskContext'

import store from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </Provider>
  )
}
