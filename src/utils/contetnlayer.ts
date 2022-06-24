import { allPosts } from 'contentlayer/generated'

// export function getBlogTags(data = allPosts) {
//     const values = data.flatMap((blog) => blog.tags)
//     return Array.from(new Set(values))
// }

export const allFeaturedPosts = allPosts.filter((blog) => blog.featured)
