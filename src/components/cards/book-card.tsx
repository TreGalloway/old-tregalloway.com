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
// import Image from 'next/image'

// import { Book as BookType } from '@/types/book'
// import Tag from './tag'

type BookCardProps = {
    data: Book
}

export default function BookCard(props: BookCardProps) {
    const { data: book } = props
    // const image = `${book.image}`
    // const alt = `${book.title} image`
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
                    {/* <BookImageCard
                        src={book.image}
                        alt={`${book.title} image`}
                    /> */}
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
                        <Button bg={'blue.500'}>
                            <TbNotes /> Notes.
                        </Button>
                    </Link>
                    <a
                        target="_blank"
                        href={book.link}
                        rel="noopener noreferrer"
                    >
                        <Button bg={'orange.400'}>
                            <TbLink /> Amazon.
                        </Button>
                    </a>
                </HStack>
            </VStack>
        </LinkBox>
    )

    type BookImageCardProps = {
        src?: string
        alt: string
    }

    function BookImageCard(props: BookImageCardProps) {
        const { src, alt } = props
        return (
            <Box
                position="relative"
                height={83}
                width={55}
                objectFit="cover"
                rounded="base"
            >
                <Image alt={alt} src={src} layout="fill" objectFit="cover" />
            </Box>
        )
    }
}
