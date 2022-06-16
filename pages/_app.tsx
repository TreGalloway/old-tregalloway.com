import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
// import 'cal-sans'

import theme from '../src/theme/theme'
import Layout from '../src/components/layout/layout'
import CmdPalette from '../src/components/cmd-palete/command-index'
import CmdPaletteProvider from 'src/providers/cmd-palette-provider'

// import '/Users/tre/tregalloway.com/styles/style.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <NextSeo
                title="Tre Galloway - Developer, content creator."
                description="Front-End React Developer, Blog Writer and YouTube Content Creator."
                twitter={{
                    cardType: 'summary_large_image',
                    handle: '@ByTreGalloway',
                }}
                openGraph={{
                    url: 'https://tregalloway.com',
                    title: 'Tre Galloway - Developer, content creator.',
                    description:
                        'Front-End React Developer, Blog Writer and YouTube Content Creator.',
                    locale: 'en_US',
                    images: [
                        {
                            url: 'https://nikolovlazar.com/assets/images/social.png',
                            width: 1200,
                            height: 630,
                            alt: 'Tre Galloway',
                            type: 'image/png',
                        },
                    ],
                }}
            />
            <CmdPaletteProvider>
                <Layout>
                    <CmdPalette />
                    <Component {...pageProps} />
                </Layout>
            </CmdPaletteProvider>
        </ChakraProvider>
    )
}

export default App
