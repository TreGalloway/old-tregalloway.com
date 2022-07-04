import {
    HStack,
    Heading,
    Text,
    Box,
    Button,
    VStack,
    LinkOverlay,
    LinkBox,
    useColorModeValue as mode,
} from '@chakra-ui/react'

import { Book } from 'contentlayer/generated'
import Image from '../image/image'
import Link from 'next/link'
import { TbNotes, TbLink } from 'react-icons/tb'

type BookCardProps = {
    data: Book
}

export default function BookCard(props: BookCardProps) {
    const { data: book } = props

    return (
        <LinkBox as="article">
            <VStack
                p={4}
                bg={mode('gray.50', 'gray.700')}
                _hover={{ transform: 'scale(1.05, 1.05)' }}
                rounded="md"
                spacing={6}
                transitionDuration="slow"
                transitionProperty="transform"
                transitionTimingFunction="ease-out"
            >
                <Box position="relative" flexShrink={0}>
                    <Image
                        src={book.image}
                        alt={`${book.title} image`}
                        height={83}
                        width={55}
                        objectFit="cover"
                        rounded={'base'}
                    />
                </Box>
                <VStack
                    alignItems="flex-start"
                    justifyContent="center"
                    h="full"
                    spacing={2}
                >
                    <LinkOverlay href={book.link} isExternal>
                        <Heading size="xs">{book.title}</Heading>
                    </LinkOverlay>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="xs">
                        {book.author}
                    </Text>
                </VStack>
                <HStack>
                    <Link href={`/books/${book.slug}`} passHref>
                        <Button bg={'blue.400'}>
                            <TbNotes /> Notes.
                        </Button>
                    </Link>
                    <a
                        target="_blank"
                        href={book.link}
                        rel="noopener noreferrer"
                    >
                        <Button bg={'orange.300'}>
                            <TbLink /> Amazon.
                        </Button>
                    </a>
                </HStack>
            </VStack>
        </LinkBox>
    )
}
