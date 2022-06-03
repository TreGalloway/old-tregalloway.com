import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const greenRing = (props: any) => ({
    _focus: {
        ringColor: mode('green.300', 'green.600')(props),
        ring: 3,
    },
})

const inputBorder = (props: any) => ({
    _focus: {
        borderColor: mode('green.300', 'green.600')(props),
    },
})

const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                fontFeatureSettings: 'Oswald',
            },
        },
    },
    sizes: {
        18: '4.5rem',
    },
    components: {
        Heading: {
            baseStyle: (props: any) => ({
                color: mode('gray.700', 'white')(props),
                letterSpacing: '1px',
            }),
        },
        Text: {
            baseStyle: (props: any) => ({
                color: mode('gray.700', 'white')(props),
            }),
        },
        Link: {
            baseStyle: (props: any) => ({
                ...greenRing(props),
            }),
        },
        Button: {
            baseStyle: (props: any) => ({
                ...greenRing(props),
            }),
        },
        Input: {
            variants: {
                filled: (props: any) => ({
                    field: {
                        ...inputBorder(props),
                    },
                }),
            },
        },
        Textarea: {
            variants: {
                filled: (props: any) => ({
                    ...inputBorder(props),
                }),
            },
        },
    },
    colors: {
        twitter: '#1EA1F1',
    },
    fonts: {
        heading: `Cal Sans, ${base.fonts.heading}`,
        body: `Inter, ${base.fonts.body}`,
    },
    mdx: {
        h1: {
            fontSize: '3xl',
            letterSpacing: '1px',
        },
        h2: {
            fontSize: 'xl',
            letterSpacing: '0.8px',
        },
        h3: {
            fontSize: 'md',
            letterSpacing: '0.6px',
        },
        h4: {
            fontSize: 'xs',
            letterSpacing: '0.5px',
        },
    },
})

export default theme
