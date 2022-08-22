import { Heading, VStack, List, ListItem, Icon, Box } from '@chakra-ui/react'
import { CgArrowRight } from 'react-icons/cg'
import { allPosts, Post } from 'contentlayer/generated'
import BlogPostCard from '../cards/blog-post-card'
import Link from '../link/link'
import { allFeaturedPosts } from '@/utils/contetnlayer'

export default function BlogpostsSection() {
    return (
        <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
            <Heading size="md">Featured blog posts.</Heading>
            <List w="full" spacing={{ base: 8, md: 2 }}>
                {allFeaturedPosts.map((post) => (
                    <ListItem key={post.slug}>
                        <BlogPostCard key={post.title} data={post} />
                    </ListItem>
                ))}
            </List>
            <Box>
                <Link
                    display="flex"
                    alignItems="center"
                    href="/blog"
                    ml={{ base: 0, md: 4 }}
                    role="group"
                >
                    Read all articles
                    <Icon
                        as={CgArrowRight}
                        ml={1}
                        color="green.500"
                        _groupHover={{ ml: 3 }}
                        transitionDuration="slow"
                        transitionProperty="margin-left"
                        transitionTimingFunction="ease-out"
                    />
                </Link>
            </Box>
        </VStack>
    )
}
