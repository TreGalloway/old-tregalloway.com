import { Box, Container } from '@chakra-ui/react'
import Hero from 'src/components/sections/hero'
// import NewsletterSignUp from 'src/components/cards/newsletter'
import NewsletterForm from 'src/components/newsletter-form/newsletter-form'
import BlogpostsSection from 'src/components/sections/blogpost-section'

import { BlogPost } from '../src/types/blog-post'

type Props = {
    posts: BlogPost[]
}

const Home = ({ posts }: Props) => {
    return (
        <Container maxWidth={'container.md'}>
            <Box>
                <Hero />
                <Box mt={5} mb={5}>
                    <NewsletterForm />
                </Box>

                <BlogpostsSection posts={posts} />
            </Box>
        </Container>
    )
}

export default Home
