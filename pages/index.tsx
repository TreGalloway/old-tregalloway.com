import { Box, Container } from '@chakra-ui/react'
import Hero from 'src/components/sections/hero'
import NewsletterForm from 'src/components/newsletter-form/newsletter-form'
import BlogpostsSection from 'src/components/sections/blogpost-section'
import generateRssFeed from '../src/utils/feed'

const Home = () => {
    return (
        <Container maxWidth={'container.md'}>
            <Box>
                <Hero />
                <Box padding={4}>
                    <NewsletterForm />
                </Box>

                <BlogpostsSection />
            </Box>
        </Container>
    )
}

// export const getStaticProps = async (_context) => {
//     await generateRssFeed()
//     return {
//         // ...
//     }
// }

export default Home
