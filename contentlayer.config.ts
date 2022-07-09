import {
    defineDocumentType,
    makeSource,
    ComputedFields,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { remarkCodeHike } from '@code-hike/mdx'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const theme = require('shiki/themes/one-dark-pro.json')

const computedFields: ComputedFields = {
    readingTime: {
        type: 'json',
        resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 300 }),
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    tweetUrl: {
        type: 'string',
        resolve: (doc) => {
            const slug = doc._raw.sourceFileName.replace(/\.mdx$/, '')
            return `https://twitter.com/intent/tweet?${new URLSearchParams({
                url: `https://tregalloway.com/${doc.type.toLowerCase()}/${slug}`,
                text: `I just read "${doc.title}" by @bytregalloway\n\n `,
            })}`
        },
    },
    params: {
        type: 'list',
        resolve: (doc) => doc._raw.flattenedPath.split('/'),
    },
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    // Location of Post source files (relative to `contentDirPath`)
    filePathPattern: 'posts/*.mdx',
    contentType: 'mdx',
    fields: {
        featured: { type: 'boolean' },
        author: { type: 'string' },
        title: { type: 'string', required: true },
        datePublished: { type: 'string', required: true },
        dateModified: { type: 'string' },
        description: { type: 'string', required: true },
        cover: { type: 'string' },
        tag: { type: 'string' },
    },
    computedFields,
}))
const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: 'projects/*.mdx',
    contentType: 'mdx',
    fields: {
        featured: { type: 'boolean' },
        title: { type: 'string', required: true },
        description: { type: 'string' },
        stack: { type: 'string' },
        github: { type: 'string' },
        live: { type: 'string' },
        image: { type: 'string' },
    },
    computedFields,
}))
const Book = defineDocumentType(() => ({
    name: 'Book',
    filePathPattern: 'books/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        author: { type: 'string', required: true },
        description: { type: 'string' },
        link: { type: 'string', required: true },
        favorite: { type: 'boolean' },
        read: { type: 'boolean', required: true },
        reading: { type: 'boolean', required: true },
        next: { type: 'boolean', required: true },
        image: { type: 'string' },
        tags: { type: 'list', of: { type: 'string' } },
    },
    computedFields,
}))
export default makeSource({
    // Location of source files for all defined documentTypes
    contentDirPath: 'content',
    documentTypes: [Post, Project, Book],
    mdx: {
        remarkPlugins: [
            remarkGfm,
            [
                remarkCodeHike,
                { theme, lineNumbers: true, showCopyButton: true },
            ],
        ],
        rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            // rehypePrism,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'append',
                    test: ['h2', 'h3', 'h4', 'h5', 'h6'],
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
})
