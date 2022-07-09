import {
    Heading,
    VStack,
    Text,
    SimpleGrid,
    GridItem,
    HStack,
} from '@chakra-ui/react'
import {
    allReadBooks,
    allReadingBooks,
    allFavBooks,
    allNextBooks,
} from '../src/utils/contetnlayer'
import BookCard from '@/components/cards/book-card'
import { TbCheckbox, TbCoffee, TbClock, TbStar } from 'react-icons/tb'
import ScrollToTopButton from '@/components/buttons/scroll-to-top-button'

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
                <HStack>
                    <Text color="yellow.500">
                        <TbStar />
                    </Text>

                    <Heading size="sm">Favorites.</Heading>
                </HStack>
                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {allFavBooks.map((book) => (
                        <GridItem key={book.title} as="article">
                            <BookCard key={book.title} data={book} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </VStack>

            <VStack alignItems="flex-start" w="full" spacing={4}>
                <HStack>
                    <Text color="purple.300">
                        <TbCoffee />
                    </Text>

                    <Heading size="sm">Reading.</Heading>
                </HStack>

                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {allReadingBooks.map((book) => (
                        <GridItem key={book.title} as="article">
                            <BookCard key={book.title} data={book} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </VStack>
            <VStack alignItems="flex-start" w="full" spacing={4}>
                <HStack>
                    <Text color={'green.400'}>
                        <TbCheckbox />
                    </Text>

                    <Heading size="sm">Read.</Heading>
                </HStack>

                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {allReadBooks.map((book) => (
                        <GridItem key={book.title} as="article">
                            <BookCard key={book.title} data={book} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </VStack>

            <VStack alignItems="flex-start" w="full" spacing={4}>
                <HStack>
                    <Text color={'blue.400'}>
                        <TbClock />
                    </Text>

                    <Heading size="sm">Next.</Heading>
                </HStack>{' '}
                <SimpleGrid
                    as="section"
                    gap={3}
                    w="full"
                    columns={{ base: 1, md: 2 }}
                >
                    {allNextBooks.map((book) => (
                        <GridItem key={book.title} as="article">
                            <BookCard key={book.title} data={book} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </VStack>
            <ScrollToTopButton />
        </VStack>
    )
}
