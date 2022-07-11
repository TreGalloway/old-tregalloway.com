import fs from 'fs'
import { Feed } from 'feed'
import { allPosts, Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import MDXComponents from '@/components/mdx-component/mdx-components'

export default function GenerateRssFeed({ post }: { post: Post }) {
    const Postcode = useMDXComponent(post.body.code)
    const mdx = <Postcode components={MDXComponents} />
    const posts = allPosts
    const siteURL = 'www.tregalloway.com'
    const date = new Date()
    const author = {
        name: 'Tre Galloway',
        link: 'https://twitter.com/bytregalloway',
    }
    const feed = new Feed({
        title: 'Tre Galloway',
        description: '',
        id: siteURL,
        link: siteURL,
        image: `${siteURL}/logo.svg`,
        favicon: `${siteURL}/favicon.png`,
        copyright: `All rights reserved ${date.getFullYear()}, Tre Galloway`,
        updated: date,
        generator: 'Feed for Node.js',
        feedLinks: {
            rss2: `${siteURL}/rss/feed.xml`,
            json: `${siteURL}/rss/feed.json`,
            atom: `${siteURL}/rss/atom.xml`,
        },
        author,
    })
    posts.forEach((post) => {
        const url = `${siteURL}/blog/${post.slug}`
        feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.description,
            // @ts-ignore: Unreachable code error

            content: mdx,
            author: [author],
            contributor: [author],
            date: new Date(post.datePublished),
        })
    })
    fs.mkdirSync('./public/rss', { recursive: true })
    fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
    fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
    fs.writeFileSync('./public/rss/feed.json', feed.json1())
}
