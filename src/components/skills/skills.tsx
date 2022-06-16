import {
    VStack,
    Box,
    SimpleGrid,
    GridItem,
    Heading,
    chakra,
} from '@chakra-ui/react'
import { DiReact } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiVisualstudiocode } from 'react-icons/si'
import { DiGitBranch } from 'react-icons/di'

import { motion, isValidMotionProp } from 'framer-motion'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and the children prop to be forwarded.
     * All other chakra props not matching the motion props will still be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
})

export default function Skills() {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <Heading size="md">Skills.</Heading>
            <SimpleGrid
                rowGap={8}
                columnGap={12}
                w="full"
                columns={{ base: 3, md: 6 }}
                spacing={6}
            >
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <IoLogoJavascript color={'#ebd41c'} size={45} />
                </ChakraBox>
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <SiTypescript color={'#0068EF'} size={45} />
                </ChakraBox>
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <DiReact color={'#63daff'} size={60} />
                </ChakraBox>
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <TbBrandNextjs size={55} />
                </ChakraBox>
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <DiGitBranch color={'#f05033'} size={55} />
                </ChakraBox>
                <ChakraBox width={50} height={50} whileHover={{ scale: 1.3 }}>
                    <SiVisualstudiocode color={'#1d9bef'} size={55} />
                </ChakraBox>
            </SimpleGrid>
        </VStack>
    )
}
