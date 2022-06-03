import { ReactNode } from 'react'
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Portfolio</Link>
                        <Link href={'#'}>Video Archive</Link>
                        <Link href={'#'}>Newsletter</Link>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ md: 'space-between' }}
                    align={{ md: 'center' }}
                >
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                        <SocialButton label={'LinkedIn'} href={'#'}>
                            <FaLinkedinIn />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
