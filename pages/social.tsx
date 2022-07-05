import {
    Text,
    VStack,
    HStack,
    Box,
    useColorModeValue as mode,
    chakra,
    Button,
} from '@chakra-ui/react'
import HeroImage from '@/components/hero-image/hero-image'
import {
    YOUTUBE_CHANNEL,
    POLYWORK_PROFILE,
    TWITTER_PROFILE,
    LINKEDIN_PROFILE,
    GITHUB_PROFILE,
    INSTAGRAM_PROFILE,
} from '../constants'
import { AiOutlineYoutube } from 'react-icons/ai'
import {
    TbBrandInstagram,
    TbBrandLinkedin,
    TbBrandTwitter,
} from 'react-icons/tb'
import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

export default function SocialPage() {
    return (
        <VStack>
            <VStack>
                <HeroImage />
                <Box
                    bg={mode('gray.50', 'gray.700')}
                    padding={15}
                    rounded={'lg'}
                >
                    <HStack
                        divider={
                            <Text mx={2} color="gray.400">
                                |
                            </Text>
                        }
                    >
                        <ChakraBox whileHover={{ scale: 1.3 }}>
                            <Text color={'red.500'}>
                                <a
                                    target="_blank"
                                    href={YOUTUBE_CHANNEL}
                                    rel="noopener noreferrer"
                                >
                                    <AiOutlineYoutube size={35} />
                                </a>
                            </Text>
                        </ChakraBox>
                        <ChakraBox whileHover={{ scale: 1.3 }}>
                            <Text color={'blue.300'}>
                                <a
                                    target="_blank"
                                    href={TWITTER_PROFILE}
                                    rel="noopener noreferrer"
                                >
                                    <TbBrandTwitter size={35} />
                                </a>
                            </Text>
                        </ChakraBox>
                        <ChakraBox whileHover={{ scale: 1.3 }}>
                            <Text color={'pink.500'}>
                                <a
                                    target="_blank"
                                    href={INSTAGRAM_PROFILE}
                                    rel="noopener noreferrer"
                                >
                                    <TbBrandInstagram size={35} />
                                </a>
                            </Text>
                        </ChakraBox>
                        <ChakraBox whileHover={{ scale: 1.3 }}>
                            <Text color={'blue.500'}>
                                <a
                                    target="_blank"
                                    href={LINKEDIN_PROFILE}
                                    rel="noopener noreferrer"
                                >
                                    <TbBrandLinkedin size={35} />
                                </a>
                            </Text>
                        </ChakraBox>
                    </HStack>
                </Box>
            </VStack>
        </VStack>
    )
}
