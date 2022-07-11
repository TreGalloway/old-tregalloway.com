import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Text,
    IconButton,
    VStack,
} from '@chakra-ui/react'
import { BiCopy } from 'react-icons/bi'
import { TbRss } from 'react-icons/tb'

const RssButton = () => {
    return (
        <>
            <Popover placement="top-start">
                <PopoverTrigger>
                    <IconButton
                        fill={''}
                        bg="gray.100"
                        _dark={{ bg: 'gray.800' }}
                        aria-label="Share Post to Twitter"
                        icon={
                            <Text color={'orange.400'}>
                                <TbRss />
                            </Text>
                        }
                        rounded="full"
                        size="lg"
                    />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Copy RSS Feed</PopoverHeader>
                    <PopoverBody>
                        <VStack>
                            <Button
                                bg={'orange.400'}
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        'https://www.tregalloway.com/rss/feed.xml'
                                    )
                                }
                                rounded={'lg'}
                            >
                                <BiCopy />
                                Xml
                            </Button>

                            <Button
                                bg={'orange.400'}
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        'https://www.tregalloway.com/rss/feed.json'
                                    )
                                }
                                rounded={'lg'}
                            >
                                <BiCopy />
                                Json
                            </Button>

                            <Button
                                bg={'orange.400'}
                                onClick={() =>
                                    navigator.clipboard.writeText(
                                        'https://www.tregalloway.com/rss/atom.xml'
                                    )
                                }
                                rounded={'lg'}
                            >
                                <BiCopy />
                                Atom
                            </Button>
                        </VStack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default RssButton
