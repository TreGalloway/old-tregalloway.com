import { useState, useEffect } from 'react'
import { IconButton, Text, Tooltip, VStack } from '@chakra-ui/react'
import RssButton from './rss-button'
import { BiArrowToTop } from 'react-icons/bi'
import { TbBrandTwitter, TbRss } from 'react-icons/tb'
import { Post } from 'contentlayer/generated'

type PostTweetProps = {
    data: Post
}

const SideButtons = (props: PostTweetProps) => {
    const { data: post } = props

    const [showSideButtons, setSideButtons] = useState(false)

    const updateSideButton = () => {
        if (window.pageYOffset > 300) {
            setSideButtons(true)
        } else {
            setSideButtons(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateSideButton)

        return () => {
            window.removeEventListener('scroll', updateSideButton)
        }
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {showSideButtons && (
                <VStack
                    position="fixed"
                    zIndex="tooltip"
                    right={{ base: 5, md: 20 }}
                    bottom={{ base: 5, md: 20 }}
                >
                    <Tooltip
                        label={'Copy Feed'}
                        placement={'left'}
                        rounded={'md'}
                    >
                        <IconButton
                            fill={''}
                            bg="gray.50"
                            _dark={{ bg: 'gray.700' }}
                            aria-label="Share Post to Twitter"
                            icon={
                                <Text color={'orange.400'}>
                                    <TbRss size={22} />
                                </Text>
                            }
                            rounded="lg"
                            size="lg"
                            variant="outline"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    'https://www.tregalloway.com/rss/feed.xml'
                                )
                            }
                        />
                    </Tooltip>
                    <Tooltip label={'Share'} placement="left" rounded={'md'}>
                        <a
                            href={post.tweetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton
                                fill={''}
                                bg="gray.50"
                                _dark={{ bg: 'gray.700' }}
                                aria-label="Share Post to Twitter"
                                icon={
                                    <Text color={'blue.300'}>
                                        <TbBrandTwitter size={22} />
                                    </Text>
                                }
                                rounded="lg"
                                size="lg"
                                variant="outline"
                            />
                        </a>
                    </Tooltip>
                    <Tooltip
                        label={'Scroll to Top'}
                        placement="left"
                        rounded={'md'}
                    >
                        <IconButton
                            bg="gray.50"
                            _dark={{ bg: 'gray.700' }}
                            aria-label="Back to the top"
                            icon={<BiArrowToTop size={22} />}
                            onClick={scrollTop}
                            rounded="lg"
                            size="lg"
                            variant="outline"
                        />
                    </Tooltip>
                </VStack>
            )}
        </>
    )
}

export default SideButtons
