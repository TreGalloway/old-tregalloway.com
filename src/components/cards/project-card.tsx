import { Project } from '.contentlayer/generated'
import {
    VStack,
    AspectRatio,
    Heading,
    Text,
    Flex,
    Box,
    Button,
    Icon,
    Link,
    HStack,
} from '@chakra-ui/react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useMDXComponent } from 'next-contentlayer/hooks'
// import Link from '../link/link'

type ProjectCardProps = {
    data: Project
}

export default function ProjectCard(props: ProjectCardProps) {
    const { data: project } = props
    const Component = useMDXComponent(project.body.code)
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
                <Heading size="md">{project.title}</Heading>

                <Text fontSize="sm">{project.description}</Text>
                <Text fontSize="sm">
                    <strong>{project.stack}</strong>
                </Text>
                <HStack>
                    <Button
                        key={project.github}
                        as={Link}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'center',
                        }}
                        px={4}
                        href={project.github}
                        leftIcon={<Icon as={FiGithub} />}
                        target="_blank"
                        variant="ghost"
                    >
                        Github.
                    </Button>
                    <Button
                        key={project.live}
                        as={Link}
                        justifyContent={{
                            base: 'flex-start',
                            md: 'center',
                        }}
                        px={4}
                        href={project.live}
                        leftIcon={<Icon as={FiExternalLink} />}
                        target="_blank"
                        variant="ghost"
                    >
                        Live.
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    )
}
