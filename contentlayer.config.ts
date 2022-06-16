import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    // Location of Post source files (relative to `contentDirPath`)
    filePathPattern: 'posts/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'string', required: true },
        description: { type: 'string', required: true },
        cover: { type: 'string' },
        tag: { type: 'string' },
    },
    computedFields: {
        readingTime: {
            type: 'json',
            resolve: (doc) => readingTime(doc.body.raw),
        },
        slug: {
            type: 'string',
            resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))
export default makeSource({
    // Location of source files for all defined documentTypes
    contentDirPath: 'content',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})
