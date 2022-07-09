import { NextSeo, ArticleJsonLd } from 'next-seo'
import { allBooks, Book } from 'contentlayer/generated'
import { VStack, Heading, HStack, Text, Divider } from '@chakra-ui/react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { GetStaticPaths, GetStaticProps } from 'next'
import MDXComponents from '@/components/mdx-component/mdx-components'
import { chakra } from '@chakra-ui/system'
import ScrollToTopButton from '../../src/components/buttons/scroll-to-top-button'
import NewsletterForm from '../../src/components/newsletter-form/newsletter-form'

export default function BookNotes({ book }: { book: Book }) {
    const title = `${book.title}  Tre Galloway`
    const description = book.description
    // Get MDX component for post
    const Component = useMDXComponent(book.body.code)
    const image = book.image

    return (
        <>
            <NextSeo
                title={title}
                description={book.description}
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
                    url: `https://tregallloway.com/books/${book.slug}`,
                    // images: [
                    //     {
                    //         url: `https://res.cloudinary.com/tregalloway/image/upload/${encodeURIComponent(
                    //             `g_north_west,l_text:calsans-semibold.ttf_72:Lazar%20Nikolov,g_north_west,x_20,y_20,co_#EDF2F7,x_330,y_208,x_330,y_208/c_fit,g_north_west,l_c_fit,g_north_west,l_text:calsans-semibold.ttf_48:${title},g_north_west,x_20,y_20,co_#718096,w_771,x_330,y_306,w_771,x_330,y_306`
                    //         )}/blog-post-image-template_scisgq.png`,
                    //     },
                    // ],
                }}
            />

            <VStack
                position="relative"
                alignItems="stretch"
                w="full"
                spacing={8}
            >
                <VStack alignItems="flex-start" spacing={3}>
                    <Heading as="h1" size="lg">
                        {book.title}
                    </Heading>
                    <HStack
                        divider={
                            <Text mx={2} color="gray.400">
                                •
                            </Text>
                        }
                    >
                        <Text color="gray.400" fontSize="sm">
                            By {book.author}
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
        paths: allBooks.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const book = allBooks.find((p) => p.slug === params.slug)
    return {
        props: {
            book,
        },
    }
}
