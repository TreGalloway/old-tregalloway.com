import { Box, Container } from '@chakra-ui/react'
import LatestPosts from 'src/components/sections/blogpost-section'
import Hero from 'src/components/sections/hero'
import NewsletterSignUp from 'src/components/cards/newsletter'
import Header from 'src/components/layout/header'

import type { NextPage } from 'next'
import LatestVideos from 'src/components/sections/lastest-videos'
import Footer from 'src/components/layout/footer'

const Home: NextPage = () => {
    return (
        <Container maxWidth={'container.md'}>
            <Box>
                <Header />
                <Hero />
                <NewsletterSignUp />
                <LatestPosts />
                <LatestVideos />
                <Footer />
            </Box>
        </Container>
    )
}

export default Home
