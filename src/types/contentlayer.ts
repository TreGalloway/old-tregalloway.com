import { pick } from 'contentlayer/client'
import { Post } from 'contentlayer/generated'

export const allTagNames = ['Next.js', 'MDX', 'Next Conf', 'React Conf']
export const allTagSlugs = ['next', 'mdx', 'next-conf', 'react-conf']

export const formatPostPreview = (post: Post) => {
    const partialPost = pick(post, [
        'tag',
        'slug',
        'title',
        'description',
        'readingTime',
    ])

    return {
        ...partialPost,
        type: post.type,
        tags: partialPost.tag || [],
    }
}

// don't send fields we don't use to the client
// the biggest culprit is post.body.raw (the raw MDX source)
export const getPartialPost = (
    { title, slug, readingTime, description, body, tag }: Post,
    allBlogs: Post[]
) => ({
    title,
    slug,
    readingTime,
    description,
    body: {
        code: body.code,
    },
})
