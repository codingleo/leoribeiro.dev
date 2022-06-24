import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { CustomThemeProvider } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default MyApp
