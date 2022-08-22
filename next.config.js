const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
}

module.exports = withContentlayer(nextConfig)

const { withKeystone } = require('@keystone-6/core/next')

module.exports = withKeystone({ reactStrictMode: true })
