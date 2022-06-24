import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { chakra, Stack, VStack, Divider, Link, Text } from '@chakra-ui/react'

import {
    TWITTER_PROFILE,
    GITHUB_PROFILE,
    YOUTUBE_CHANNEL,
    POLYWORK_PROFILE,
    LINKEDIN_PROFILE,
} from '../../../constants'
import { Link as LinkType } from '@/types/link'

const firstGroup: LinkType[] = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/blog',
        label: 'Blog',
    },
    {
        href: '/portfolio',
        label: 'Portfolio',
    },

    {
        href: '/newsletter',
        label: 'Newsletter',
    },
]

const secondGroup = [
    {
        href: '/books',
        label: 'Books',
    },
    {
        href: '/tools',
        label: 'Tools',
    },
    {
        href: '/gear',
        label: 'Gear',
    },
    {
        href: '/videos',
        label: 'Videos',
    },
]

const thirdGroup = [
    {
        href: TWITTER_PROFILE,
        label: 'Twitter',
    },
    {
        href: GITHUB_PROFILE,
        label: 'GitHub',
    },
    {
        href: YOUTUBE_CHANNEL,
        label: 'YouTube',
    },
    {
        href: POLYWORK_PROFILE,
        label: 'Polywork',
    },
]

const Footer = () => {
    const { pathname } = useRouter()

    return (
        <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
            <Divider />
            <Stack
                justifyContent="space-between"
                direction={{ base: 'column', md: 'row' }}
                w="full"
                spacing={{ base: 2, md: 8 }}
            >
                <VStack alignItems="flex-start">
                    {firstGroup.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                color={
                                    pathname === href ? 'green.500' : 'gray.500'
                                }
                                isExternal={href.startsWith('http')}
                            >
                                {label}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {secondGroup.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                color="gray.500"
                                isExternal={href.startsWith('http')}
                                target="_blank"
                            >
                                {label}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
                <VStack alignItems="flex-start">
                    {thirdGroup.map(({ href, label }) => (
                        <NextLink key={href} href={href} passHref>
                            <Link
                                color={
                                    pathname === href
                                        ? 'purple.500'
                                        : 'gray.500'
                                }
                                isExternal={href.startsWith('http')}
                            >
                                {label}
                            </Link>
                        </NextLink>
                    ))}
                </VStack>
            </Stack>
            <Stack
                alignItems="center"
                justifyContent={{ base: 'center', md: 'space-between' }}
                direction={{ base: 'column', md: 'row' }}
                gridRowGap={4}
                w="full"
                spacing={0}
            >
                <Text color="gray.500" fontSize="sm">
                    ©{' '}
                    <chakra.span as="time" color="green.500">
                        {new Date().getFullYear()}
                    </chakra.span>{' '}
                    Tre Galloway
                </Text>
            </Stack>
        </VStack>
    )
}

export default Footer
