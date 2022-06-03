import { Container, Box } from '@chakra-ui/react'
import Navbar from 'src/components/layout/header'
import type { NextPage } from 'next'

const Blog: NextPage = () => {
    return (
        <Container maxWidth={'container.md'}>
            <Box>
                <Navbar />
            </Box>
        </Container>
    )
}

export default Blog
