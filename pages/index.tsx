import { Box, Container } from '@chakra-ui/react'
import LatestPosts from 'components/home-sections/latest-posts'
import Hero from 'components/cards/hero'
import NewsletterSignUp from 'components/cards/newsletter'
import Navbar from 'components/navigation/navbar'

import type { NextPage } from 'next'
import LatestVideos from 'components/home-sections/lastest-videos'
import CurrentProjects from 'components/home-sections/current-projects'
import Footer from 'components/navigation/footer'

const Home: NextPage = () => {
    return (
        <Container>
            <Box>
                <Navbar />
                <Hero />
                <NewsletterSignUp />
                <CurrentProjects />
                <LatestPosts />
                <LatestVideos />
                <Footer />
            </Box>
        </Container>
    )
}

export default Home
