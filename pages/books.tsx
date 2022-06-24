import { GetStaticProps } from 'next'
import { Heading, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { allBooks, Book } from 'contentlayer/generated'
import BookCard from '@/components/cards/book-card'

export default function Books() {
    return (
        <VStack alignItems="flex-start" spacing={8}>
            <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
                <Heading size="md">Books.</Heading>
                <Text>
                    A collection of interesting books that I read or look
                    forward to reading them.
                </Text>
            </VStack>

            <VStack alignItems="flex-start" w="full" spacing={4}>
                <Heading size="sm">Reading.</Heading>
                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {/* {reading.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))} */}
                </SimpleGrid>
            </VStack>

            <VStack alignItems="flex-start" w="full" spacing={4}>
                <Heading size="sm">Read.</Heading>
                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {/* {[...favorites, ...completed].map((book) => (
                        <Book key={book.id} book={book} />
                    ))} */}
                </SimpleGrid>
            </VStack>

            <VStack alignItems="flex-start" w="full" spacing={4}>
                <Heading size="sm">Next.</Heading>
                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {/* {wishing.map((book) => (
                        <Book key={book.id} book={book} />
                    ))} */}
                </SimpleGrid>
            </VStack>
        </VStack>
    )
}
