import { IconType } from 'react-icons/lib'
import {
    SiTwitter,
    SiGithub,
    SiYoutube,
    SiLinkedin,
    SiInstagram,
} from 'react-icons/si'
import { IoMoon } from 'react-icons/io5'

import {
    GITHUB_PROFILE,
    LINKEDIN_PROFILE,
    INSTAGRAM_PROFILE,
    TWITTER_PROFILE,
    YOUTUBE_CHANNEL,
} from '../constants'

type BaseItem = {
    title: string
}

export type PageItem = BaseItem & {
    href: string
}

export type SocialItem = BaseItem & {
    href: string
    icon: IconType
}

export type ThemeItem = BaseItem & {
    id: 'theme'
    icon: IconType
}

export type SearchItemsType = {
    pages: PageItem[]
    social: SocialItem[]
    theme: ThemeItem[]
}

export const searchItems: SearchItemsType = {
    pages: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        // {
        //     title: 'Colophon',
        //     href: '/colophon',
        // },
        // {
        //     title: 'Talks',
        //     href: '/talks',
        // },

        // {
        //     title: 'Uses',
        //     href: '/uses',
        // },
        // {
        //     title: 'Gear',
        //     href: '/gear',
        // },
        // {
        //     title: 'Bookmarks',
        //     href: '/bookmarks',
        // },
        // {
        //     title: 'Books',
        //     href: '/books',
        // },
        {
            title: 'Newsletter',
            href: '/newsletter',
        },
    ],
    social: [
        {
            title: 'Twitter',
            icon: SiTwitter,
            href: TWITTER_PROFILE,
        },
        {
            title: 'GitHub',
            icon: SiGithub,
            href: GITHUB_PROFILE,
        },
        {
            title: 'YouTube',
            icon: SiYoutube,
            href: YOUTUBE_CHANNEL,
        },
        {
            title: 'LinkedIn',
            icon: SiLinkedin,
            href: LINKEDIN_PROFILE,
        },
        {
            title: 'Instagram',
            icon: SiInstagram,
            href: INSTAGRAM_PROFILE,
        },
    ],
    theme: [
        {
            id: 'theme',
            title: 'Change theme',
            icon: IoMoon,
        },
    ],
}
