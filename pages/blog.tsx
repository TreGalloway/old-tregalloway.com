import { ChangeEventHandler, useState } from 'react'
import { GetStaticPropsResult, InferGetStaticPropsType, NextPage } from 'next'
import {
    Heading,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    Icon,
    List,
    ListItem,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { HiOutlineSearch } from 'react-icons/hi'

import BlogPostCard from '../src/components/cards/blog-post-card'
import { allPosts, Post } from 'contentlayer/generated'
import GenerateRssFeed from '@/utils/feed'

export async function getStaticProps(
    _context
): Promise<GetStaticPropsResult<{ posts: Post[] }>> {
    GenerateRssFeed

    return { props: { posts: allPosts } }
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    posts,
}) => {
    const [displayPosts, setDisplayPosts] = useState<Post[]>(posts)

    const onSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
        const query = event.currentTarget.value

        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        )

        setDisplayPosts(filteredPosts)
    }

    return (
        <>
            <NextSeo title="Blog - Tre Galloway" />
            <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
                <Heading size="md">Blog.</Heading>
                <Text fontSize="md">
                    Web development, Personal development, and my thought &
                    ideas. I’ve written a total of {posts.length} articles.
                </Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <Icon as={HiOutlineSearch} color="gray.400" />
                    </InputLeftElement>
                    <Input
                        onChange={onSearch}
                        placeholder="Search blog posts"
                        variant="filled"
                    />
                </InputGroup>
            </VStack>
            <List w="full" spacing={2}>
                {displayPosts.map((post) => (
                    <ListItem key={post.slug}>
                        <BlogPostCard key={post.title} data={post} />
                    </ListItem>
                ))}
            </List>
            {displayPosts.length === 0 && (
                <Text>No articles for that query</Text>
            )}
        </>
    )
}

export default Blog
