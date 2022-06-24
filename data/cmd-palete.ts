import { IconType } from 'react-icons/lib'
import {
    SiTwitter,
    SiGithub,
    SiYoutube,
    SiPolywork,
    SiLinkedin,
    SiInstagram,
} from 'react-icons/si'
import { IoMoon } from 'react-icons/io5'

import {
    GITHUB_PROFILE,
    LINKEDIN_PROFILE,
    POLYWORK_PROFILE,
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
        {
            title: 'Portfolio',
            href: '/portfolio',
        },
        {
            title: 'Tools',
            href: '/tools',
        },
        {
            title: 'Gear',
            href: '/gear',
        },
        {
            title: 'Videos',
            href: '/videos',
        },

        // {
        //     title: 'Bookmarks',
        //     href: '/bookmarks',
        // },
        {
            title: 'Books',
            href: '/books',
        },
        {
            title: 'Newsletter',
            href: '/newsletter',
        },
    ],
    social: [
        {
            title: 'YouTube',
            icon: SiYoutube,
            href: YOUTUBE_CHANNEL,
        },
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
            title: 'Polywork',
            icon: SiPolywork,
            href: POLYWORK_PROFILE,
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
