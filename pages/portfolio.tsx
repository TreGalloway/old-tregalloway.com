import { Heading, SimpleGrid, GridItem, VStack } from '@chakra-ui/react'

import { Project } from '../src/types/project'
import ProjectCard from '../src/components/cards/project-card'

type Props = {
    projects: Project[]
}

const Portfolio = ({ projects }: Props) => {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <Heading size="lg">Portfolio.</Heading>
            <SimpleGrid
                rowGap={8}
                columnGap={12}
                w="full"
                columns={{ base: 1, md: 2 }}
                spacing={6}
            >
                {projects.map((project) => (
                    <GridItem key={project.github} as="article">
                        <ProjectCard {...project} />
                    </GridItem>
                ))}
            </SimpleGrid>
        </VStack>
    )
}

export default Portfolio
