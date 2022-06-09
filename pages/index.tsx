import { Box, Container } from '@chakra-ui/react'
import Hero from 'src/components/sections/hero'
import NewsletterSignUp from 'src/components/cards/newsletter'
import BlogpostsSection from 'src/components/sections/blogpost-section'

import { BlogPost } from '../src/types/blog-post'

import type { NextPage } from 'next'
import Footer from 'src/components/layout/footer'

type Props = {
    posts: BlogPost[]
}

const Home = ({ posts }: Props) => {
    return (
        <Container maxWidth={'container.md'}>
            <Box>
                <Hero />
                <NewsletterSignUp />
                <BlogpostsSection posts={posts} />
                <Footer />
            </Box>
        </Container>
    )
}

export default Home
