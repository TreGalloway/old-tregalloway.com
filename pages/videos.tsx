import { VStack, Heading, Text, List, ListItem } from '@chakra-ui/react'

const Videos = () => {
    return (
        <>
            <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
                <Heading size="md">Videos.</Heading>
                <Text>
                    This is where I will upload a collection of {''}
                    <strong>all videos</strong> I have recored, ... eventually.
                </Text>
            </VStack>
        </>
    )
}

export default Videos
