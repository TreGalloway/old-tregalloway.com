import { Box, Heading, Text } from '@chakra-ui/react'

export default function Hero() {
    return (
        <Box>
            <Heading as="h1" size="xl" noOfLines={1} mt="10">
                Tre Galloway
            </Heading>
            <Text fontSize="1.3rem" color={'gray.700'}>
                Front-End Developer & Content Creator
            </Text>
            <Text color={'gray.700'} mt="5">
                Helping others in their developer and personal growth journeys.
            </Text>
        </Box>
    )
}
