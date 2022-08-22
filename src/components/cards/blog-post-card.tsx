import Link from 'next/link'
import {
    LinkBox,
    LinkOverlay,
    Heading,
    Text,
    VStack,
    chakra,
    HStack,
} from '@chakra-ui/react'

import { format } from 'timeago.js'

import { Post } from 'contentlayer/generated'

type BlogCardProps = {
    data: Post
}

const BlogPostCard = (props: BlogCardProps) => {
    const { data: post } = props

    return (
        <LinkBox as="article">
            <VStack
                alignItems="stretch"
                w="full"
                p={{ base: 0, md: 4 }}
                _hover={{
                    bg: 'gray.100',
                    transform: 'scale(1.025, 1.025)',
                }}
                _dark={{
                    _hover: {
                        bg: 'gray.700',
                    },
                }}
                rounded="md"
                transitionDuration="slow"
                transitionProperty="all"
                transitionTimingFunction="ease-out"
            >
                <VStack alignItems="flex-start">
                    <Link href={`/blog/${post.slug}`} passHref>
                        <LinkOverlay>
                            <Heading size="md">{post.title}</Heading>
                        </LinkOverlay>
                    </Link>
                    <HStack
                        divider={
                            <Text mx={2} color="gray.500">
                                •
                            </Text>
                        }
                    >
                        <Text color="gray.500" fontSize="sm">
                            {format(post.datePublished)}
                        </Text>
                        <Text color="gray.500" fontSize="sm">
                            <chakra.span>{post.readingTime.text}</chakra.span>
                        </Text>
                    </HStack>
                </VStack>
                <Text color="gray.500" fontSize="sm">
                    {post.description}
                </Text>
            </VStack>
        </LinkBox>
    )
}

export default BlogPostCard
