import fs from 'fs'
import { Feed } from 'feed'
import { allPosts } from 'contentlayer/generated'

const generateRssFeed = async () => {
    const posts = allPosts
    const siteURL = 'www.tregalloway.com'
    const date = new Date()
    const author = {
        name: 'Tre Galloway',
        email: 'tre@tregalloway.com',
        link: 'https://twitter.com/bytregalloway',
    }
    const feed = new Feed({
        title: 'Tre Galloway blog',
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
            content: post.description,
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

export default generateRssFeed
