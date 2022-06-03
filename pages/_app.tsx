import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Tre Galloway</title>
                <meta name="description" content="Tre Galloway Website" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
