import { SimpleGrid, GridItem, VStack } from '@chakra-ui/react'

import { Project } from '../../types/project'
import ProjectCard from '../cards/project-card'

type Props = {
    projects: Project[]
}

const PortfolioSection = ({ projects }: Props) => {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <SimpleGrid
                rowGap={8}
                columnGap={12}
                w="full"
                columns={{ base: 1, md: 2 }}
                spacing={6}
            >
                {projects.map((project) => (
                    <GridItem key={project.title} as="article">
                        <ProjectCard {...project} />
                    </GridItem>
                ))}
            </SimpleGrid>
        </VStack>
    )
}

export default PortfolioSection
