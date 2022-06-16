import { NextSeo } from 'next-seo'
import { allPosts, Post } from 'contentlayer/generated'
import { VStack, Heading, HStack, Text, Divider } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import MDXComponents from '@/components/mdx-component/mdx-components'
import { format } from 'timeago.js'
import ScrollToTopButton from '../../src/components/scroll-to-top-button/scroll-to-top-button'
import NewsletterForm from '../../src/components/newsletter-form/newsletter-form'

export const getStaticPaths = async () => {
    return {
        paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const blog = allPosts.find((p) => p.slug === params.slug)
    return {
        props: {
            blog,
        },
    }
}
export default function Blog({ post }: { post: Post }) {
    // Get MDX component for post
    const Component = useMDXComponent(post.body.code)
    const title = `${post.title} — Tre Galloway`

    return (
        <>
            <NextSeo
                title={title}
                description={post.description}
                // openGraph={{
                //     // description,
                //     title: `${title} `,
                //     url: `https://tregalloway.com/blog/${slug}`,
                //     images: [
                //         {
                //             url: `https://res.cloudinary.com/tregalloway/image/upload/${encodeURIComponent(
                //                 `g_north_west,l_text:calsans-semibold.ttf_72:Lazar%20Nikolov,g_north_west,x_20,y_20,co_#EDF2F7,x_330,y_208,x_330,y_208/c_fit,g_north_west,l_c_fit,g_north_west,l_text:calsans-semibold.ttf_48:${title},g_north_west,x_20,y_20,co_#718096,w_771,x_330,y_306,w_771,x_330,y_306`
                //             )}/blog-post-image-template_scisgq.png`,
                //         },
                //     ],
                // }}
            />
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
                        {/* <Text color="gray.500" fontSize="sm">
                            {readingTime}
                        </Text> */}
                        <time dateTime={post.date}>{post.date}</time>
                    </HStack>
                </VStack>
                <Component
                    components={{
                        ...MDXComponents,
                    }}
                />
                <Divider />
                <NewsletterForm />
            </VStack>
            <ScrollToTopButton />
        </>
    )
}
