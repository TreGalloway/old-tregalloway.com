import { Box, AspectRatio, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import profile from '../../../public/assets/profile.png'

import StatusIndicator from '../status-indicator.tsx/status-indicator'

const HeroImage = () => {
    return (
        <Flex position="relative" justify="center" pb={4}>
            <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
                <Box overflow="hidden" rounded="full">
                    <Image src={profile} alt="profile image" />
                </Box>
            </AspectRatio>
            <StatusIndicator />
        </Flex>
    )
}

export default HeroImage
