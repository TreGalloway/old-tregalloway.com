import { NextSeo, ArticleJsonLd } from 'next-seo'
import { allPosts, Post } from 'contentlayer/generated'
import { VStack, Heading, HStack, Text, Divider } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { GetStaticPaths, GetStaticProps } from 'next'
import MDXComponents from '@/components/mdx-component/mdx-components'
import formatDate from '@/utils/format-date'
import { chakra } from '@chakra-ui/system'

import NewsletterForm from '../../src/components/newsletter-form/newsletter-form'

import SideButtons from '@/components/buttons/side-buttons'

export default function Blog({ post }: { post: Post }) {
    const title = `${post.title} — Tre Galloway`
    const description = post.description
    // Get MDX component for post
    const Component = useMDXComponent(post.body.code)
    const date = formatDate(post.datePublished)
    const image = post.cover

    return (
        <>
            <NextSeo
                title={title}
                description={post.description}
                robotsProps={{
                    nosnippet: false,
                    notranslate: false,
                    noimageindex: false,
                    noarchive: false,
                    maxSnippet: -1,
                    maxImagePreview: 'none',
                    maxVideoPreview: -1,
                }}
                openGraph={{
                    description,
                    title: title,
                    url: `https://tregallloway.com/blog/${post.slug}`,
                    images: [
                        {
                            url: `https://res.cloudinary.com/tregalloway/image/upload/${encodeURIComponent(
                                `g_north_west,l_text:calsans-semibold.ttf_72:Lazar%20Nikolov,g_north_west,x_20,y_20,co_#EDF2F7,x_330,y_208,x_330,y_208/c_fit,g_north_west,l_c_fit,g_north_west,l_text:calsans-semibold.ttf_48:${title},g_north_west,x_20,y_20,co_#718096,w_771,x_330,y_306,w_771,x_330,y_306`
                            )}/blog-post-image-template_scisgq.png`,
                        },
                    ],
                }}
            />
            <ArticleJsonLd
                type="Blog"
                url="https://tregallloway.com/blog"
                title="Blog headline"
                images={[
                    'https://example.com/photos/1x1/photo.jpg',
                    'https://example.com/photos/4x3/photo.jpg',
                    'https://example.com/photos/16x9/photo.jpg',
                ]}
                datePublished={post.datePublished}
                dateModified={post.datePublished}
                authorName={post.author}
                description={post.description}
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
                            <Text mx={2} color="gray.400">
                                •
                            </Text>
                        }
                    >
                        <Text color="gray.400" fontSize="sm">
                            Published on {''}
                            <time dateTime={date.iso}>{date.pretty}</time>
                        </Text>
                        <Text color="gray.400" fontSize="sm">
                            By {post.author}
                        </Text>

                        {/* <Text color="gray.500" fontSize="sm">
                            {views ?? <Spinner color="gray.500" size="xs" />}{' '}
                            views
                        </Text> */}
                        <Text color="gray.400" fontSize="sm" as="i">
                            <chakra.span>{post.readingTime.text}</chakra.span>
                        </Text>
                    </HStack>
                    {/* <Image
                        src={image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        priority
                    /> */}
                </VStack>
                <Component components={MDXComponents} />
                <Divider />
                <NewsletterForm />
            </VStack>
            <SideButtons key={post.tweetUrl} data={post} />
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
