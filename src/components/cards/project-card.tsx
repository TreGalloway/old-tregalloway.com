import { useState, useEffect } from 'react'
import {
    VStack,
    AspectRatio,
    Spinner,
    Heading,
    Text,
    LinkBox,
    LinkOverlay,
    Flex,
    Icon,
    Box,
} from '@chakra-ui/react'

import { Project } from '../../types/project'
import Image from '../image/image'
import { HiPlay } from 'react-icons/hi'
import Link from '../link/link'

type Props = Project

const ProjectCard = ({ title, description, live, github }: Props) => {
    return (
        <VStack alignItems="flex-start" spacing={4}>
            <AspectRatio
                position="relative"
                overflow="hidden"
                w="full"
                ratio={16 / 9}
                role="group"
                rounded="lg"
            >
                <>
                    <Box>
                        <Flex
                            position="absolute"
                            zIndex="docked"
                            align="center"
                            justify="center"
                            bg="transparent"
                            _groupHover={{ bg: 'blackAlpha.500' }}
                            inset={0}
                            transitionDuration="slow"
                            transitionProperty="background"
                            transitionTimingFunction="ease-out"
                        ></Flex>
                    </Box>
                    {/* <Image
                        alt={`Homepage of ${title}`}
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        fallbackSrc={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                        layout="fill"
                        objectFit="cover"
                    /> */}
                </>
            </AspectRatio>
            <VStack alignItems="flex-start" spacing={2}>
                <Heading size="md">{title}</Heading>

                <Text color="gray.500" fontSize="sm">
                    {description}
                </Text>
                <Link href={live}>Live.</Link>
                <Link href={github}>Github.</Link>
            </VStack>
        </VStack>
    )
}

export default ProjectCard
