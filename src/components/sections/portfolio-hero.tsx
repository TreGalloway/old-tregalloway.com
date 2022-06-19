import {
    Stack,
    VStack,
    Heading,
    Text,
    Button,
    Icon,
    Link,
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

import {
    GITHUB_PROFILE,
    LINKEDIN_PROFILE,
    RESUME_PDF,
} from '../../../constants'
import { Link as LinkType } from '../../types/link'
import HeroImage from '../hero-image/hero-image'

type SocialLink = LinkType & { color?: string }

const socialLinks: SocialLink[] = [
    {
        href: LINKEDIN_PROFILE,
        label: 'LinkedIn',
        color: 'blue.500',
    },
    {
        href: GITHUB_PROFILE,
        label: 'GitHub',
    },
    {
        href: RESUME_PDF,
        label: ' Resume',
        color: 'green.500',
    },
]

const PortfolioHero = () => {
    return (
        <Stack
            as="section"
            alignItems="center"
            direction={{ base: 'column-reverse', md: 'row' }}
            w="full"
            spacing={12}
        >
            <VStack alignItems="flex-start" w="full" spacing={3}>
                <Stack
                    alignItems="center"
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    direction={{ base: 'column', md: 'row' }}
                    w="full"
                    spacing={3}
                >
                    <Heading as="h1" size="lg">
                        Hi, I’m Tre Galloway.
                    </Heading>
                </Stack>
                <Text as="h2" lineHeight="175%">
                    I’m a <strong>Front-End Web Developer</strong> & Content
                    Creator. My tech stack focuses in the{' '}
                    <strong>React </strong>
                    ecosystem (Typescript,NextJS). I also create content on
                    <strong> personal development</strong> and{' '}
                    <strong>coding</strong> .
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
                    {socialLinks.map(({ href, label, color }) => (
                        <Button
                            key={href}
                            as={Link}
                            justifyContent={{
                                base: 'flex-start',
                                md: 'center',
                            }}
                            px={4}
                            color={color}
                            href={href}
                            rightIcon={<Icon as={FiArrowUpRight} />}
                            target="_blank"
                            variant="ghost"
                        >
                            {label}
                        </Button>
                    ))}
                </Stack>
            </VStack>
            <HeroImage />
        </Stack>
    )
}

export default PortfolioHero
