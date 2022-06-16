import { allProjects } from 'contentlayer/generated'
import { SimpleGrid, GridItem, VStack } from '@chakra-ui/react'
import MDXComponents from '../mdx-component/mdx-components'
import ProjectCard from '../cards/project-card'

export default function PortfolioSection() {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <SimpleGrid
                rowGap={8}
                columnGap={12}
                w="full"
                columns={{ base: 1, md: 2 }}
                spacing={6}
            >
                {allProjects.map((project) => (
                    <GridItem key={project.title} as="article">
                        <ProjectCard key={project.title} data={project} />
                    </GridItem>
                ))}
            </SimpleGrid>
        </VStack>
    )
}
