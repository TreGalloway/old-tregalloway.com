import { allPosts, allBooks } from 'contentlayer/generated'

// export function getBlogTags(data = allPosts) {
//     const values = data.flatMap((blog) => blog.tags)
//     return Array.from(new Set(values))
// }

export const allFeaturedPosts = allPosts.filter((blog) => blog.featured)

export const allReadBooks = allBooks.filter((book) => book.read)

export const allReadingBooks = allBooks.filter((book) => book.reading)

export const allNextBooks = allBooks.filter((book) => book.next)

export const allFavBooks = allBooks.filter((book) => book.favorite)
