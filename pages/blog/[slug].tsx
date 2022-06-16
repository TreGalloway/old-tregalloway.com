import { NextSeo } from 'next-seo'
import { allPosts, Post } from 'contentlayer/generated'
import { VStack, Heading, HStack, Text, Divider } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { GetStaticPaths, GetStaticProps } from 'next'
import MDXComponents from '@/components/mdx-component/mdx-components'
import { format } from 'timeago.js'
import { chakra } from '@chakra-ui/system'
import ScrollToTopButton from '../../src/components/scroll-to-top-button/scroll-to-top-button'
import NewsletterForm from '../../src/components/newsletter-form/newsletter-form'

export default function Blog({ post }: { post: Post }) {
    const title = `${post.title} — Tre Galloway`
    // Get MDX component for post
    const Component = useMDXComponent(post.body.code)
    return (
        <>
            <NextSeo title={title} description={post.description} />
            <VStack
                position="relative"
                alignItems="stretch"
                w="full"
                spacing={8}
            >
                <VStack alignItems="flex-start" spacing={3}>
                    <Heading as="h1" size="lg">
                        {post.title}
                    </Heading>
                    <HStack
                        divider={
                            <Text mx={2} color="gray.500">
                                •
                            </Text>
                        }
                    >
                        <Text color="gray.500" fontSize="sm">
                            {format(post.date)}
                        </Text>
                        {/* <Text color="gray.500" fontSize="sm">
                            {views ?? <Spinner color="gray.500" size="xs" />}{' '}
                            views
                        </Text> */}
                        <Text color="gray.500" fontSize="sm">
                            <chakra.span>{post.readingTime.text}</chakra.span>
                        </Text>
                    </HStack>
                </VStack>
                <Component components={MDXComponents} />
                <Divider />
                <NewsletterForm />
            </VStack>
            <ScrollToTopButton />
        </>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug)
    return {
        props: {
            post,
        },
    }
}
