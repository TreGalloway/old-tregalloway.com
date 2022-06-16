import {
    defineDocumentType,
    makeSource,
    ComputedFields,
} from 'contentlayer/source-files'
import readingTime from 'reading-time'

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
                url: `https://adebayosegun.com/${doc.type.toLowerCase()}/${slug}`,
                text: `I just read "${doc.title}" by @thesegunadebayo\n\n`,
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
        title: { type: 'string', required: true },
        date: { type: 'string', required: true },
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
export default makeSource({
    // Location of source files for all defined documentTypes
    contentDirPath: 'content',
    documentTypes: [Post, Project],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})
