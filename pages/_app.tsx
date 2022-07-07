import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import { ChakraProvider } from '@chakra-ui/react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'
import Head from 'next/head'

// import 'cal-sans'

import theme from '../src/theme/theme'
import Layout from '../src/components/layout/layout'
import CmdPalette from '../src/components/cmd-palete/command-index'
import CmdPaletteProvider from 'src/providers/cmd-palette-provider'
// import '../styles/prism.css'
import '@code-hike/mdx/dist/index.css'

// import '/Users/tre/tregalloway.com/styles/style.css'

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    useEffect(() => {
        // Initialize Fathom when the app loads
        // Example: yourdomain.com
        //  - Do not include https://
        //  - This must be an exact match of your domain.
        //  - If you're using www. for your domain, make sure you include that here.
        Fathom.load('UPJAYRLL', {
            includedDomains: ['tregalloway.com', 'www.tregalloway.com'],
        })

        function onRouteChangeComplete() {
            Fathom.trackPageview()
        }
        // Record a pageview when route changes
        router.events.on('routeChangeComplete', onRouteChangeComplete)

        // Unassign event listener
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, [])
    return (
        <ChakraProvider theme={theme}>
            <NextSeo
                title="Tre Galloway - Developer & Content Creator."
                titleTemplate="Tre Galloway | Developer & Creator"
                description="I'm Tre Galloway. Developer, Content Creator and maybe one day a author. I explore different conepts around personal development and share thing I learn on web development."
                twitter={{
                    cardType: 'summary_large_image',
                    handle: '@bytregalloway',
                    site: 'https://twitter.com/bytregalloway',
                }}
                robotsProps={{}}
                openGraph={{
                    url: 'https://tregalloway.com',
                    title: 'Tre Galloway - Developer & Content Creator.',
                    description:
                        "I'm Tre Galloway. Developer, Content Creator and maybe one day a author. I explore different conepts around personal development and share thing I learn on web development.",
                    locale: 'en_US',
                    images: [
                        {
                            url: 'https://tregalloway.com/assets/images/social.png',
                            width: 1200,
                            height: 630,
                            alt: 'Tre Galloway',
                            type: 'image/png',
                        },
                    ],
                }}
            />
            <SocialProfileJsonLd
                type="Person"
                name="Tre Galloway"
                url="http://www.tregalloway.com"
                sameAs={[
                    'http://instagram.com/bytregalloway',
                    'http://www.linkedin.com/in/tregalloway',
                    'https://twitter.com/bytregalloway',
                    'https://www.youtube.com/channel/UCRQPGu1zovYhIdP86WCTKLw',
                ]}
            />
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="android-chrome-192x192"
                    sizes="192x192"
                    href="/android-chrome-192x192.png"
                />
                <link
                    rel="android-chrome-512x512"
                    sizes="512x512"
                    href="/android-chrome-512x512.png"
                />
            </Head>
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
